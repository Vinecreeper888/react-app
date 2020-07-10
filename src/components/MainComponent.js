import React from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Aboutcomponent from './AboutComponent';
//import Dishdetail from './components/DishdetailComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addComment} from '../redux/ActionCreators';

 const mapStateToProps = state => {
    return {
      //map the redux store state to props
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    } 
  }

  const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
  });

class Main extends React.Component {

  constructor(props) {
    super(props);

  }



  // onDishSelect(dishId) {
  //   this.setState({selectedDish: dishId});
  // }

  render() {

    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId = ({match}) => {
      return (
        <Dishdetail dishes1={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          addComment={this.props.addComment}
        />
      );
    }

    const About = () => {
      return (
        <Aboutcomponent leaders={this.props.leaders} />
      );
    }

    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId}/>
          <Route exact path="/contactus" component={Contact}/>
          <Route exact path="/aboutus" component={About}/>
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));


//should go inside the div inside render()
//<Menu dishes={this.state.dishes}
//onClick={(dishId) => this.onDishSelect(dishId)}/>
// <Dishdetail dishes1={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        