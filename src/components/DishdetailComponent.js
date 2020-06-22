import React from 'react';
import ReactDOM from 'react-dom';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class Dishdetail extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			selectedDish: null,
			
		}
	}


	renderDish(dish){
		if(dish != null) {
			return(
				<Card>
					<CardImg key={dish.id} width="100%" src={dish.image} alt={dish.name}/>
					<CardBody>
						<CardTitle heading>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
		} else {
			return (
				<div></div>
			);
		}
	}

	onDishSelect(item) {

		this.setState({
			selectedDish: item
		})
	}

	renderComments(c) {
		if(c!=null) {
			return(
				<div className="col-12 col-md-5 m-1">
					<ul className="list-unstyled">
						<p>COMMENTS</p>
						{c.comments.map((item,index) => {
							return(
								<div key={index}>
									<li>{item.comment}</li>
									<li>-----{item.author}, {item.date}</li>
									<br/>
								</div>
							);
						})}
					</ul>
				</div>
			);
		} else {
			return (
				<div></div>
			);
		}
	}

	render() {

		const detail = this.props.dishes1.map((item) => {

			return(
				<div key={item.id} className="col-12 col-md-5 m-1">

		 			<Card onClick={() => this.onDishSelect(item)}>
		 					<CardImg width="100%" src={item.image} alt={item.name}/>
		 				<CardImgOverlay body className="ml-5">
		 					<CardTitle heading>{item.name}</CardTitle>
		 				</CardImgOverlay>
		 			</Card>
				</div>
			);
		});

		return (
			<div className="row">
				{detail}
				{this.renderDish(this.state.selectedDish)}
				{this.renderComments(this.state.selectedDish)}				
			</div>
		);
	}
}
export default Dishdetail;