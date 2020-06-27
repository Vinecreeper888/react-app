import React from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import Dishdetail from './DishdetailComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
//import Dishdetail from './components/DishdetailComponent';
import {Switch, Route, Redirect} from 'react-router-dom';


class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({selectedDish: dishId});
  // }

  render() {

    const HomePage = () => {
      return (
        <Home/>
      );
    }
    return (
      <div>
        <Header/>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
  
}

export default Main;


//should go inside the div inside render()
//<Menu dishes={this.state.dishes}
//onClick={(dishId) => this.onDishSelect(dishId)}/>
// <Dishdetail dishes1={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        