import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class Dishdetail extends React.Component {

	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		selectedDish: null,
	// 	}
	// }


	// onDishSelect(dish) {
	// 	this.setState({
	// 		selectedDish: dish
	// 	})
	// }

	componentDidMount() {
		console.log("Dishdetail component componentDidMount invoked");
	}

	componentDidUpdate() {
		console.log("Dishdetail Component componentDidUpdate invoked");
	}

	renderDish(dish){
		// if(dish != null) {
		// 	return(
		// 		<Card>
		// 			<CardImg key={dish.id} width="100%" src={dish.image} alt={dish.name}/>
		// 			<CardBody>
		// 				<CardTitle heading>{dish.name}</CardTitle>
		// 				<CardText>{dish.description}</CardText>
		// 			</CardBody>
		// 		</Card>
		// 	);
		// } else {
		// 	return (
		// 		<div></div>
		// 	);
		// }

		return(

			<div className="col-12 col-md-5 m-1">
				<Card>
					<CardImg top src={dish.image} alt={dish.name}/>
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			</div>
		);

	}	


	renderComments(c) {
	// 	if(c!=null) {
	// 		return(
	// 			<div className="col-12 col-md-5 m-1">
	// 				<ul className="list-unstyled">
	// 					<p>COMMENTS</p>
	// 					{c.comments.map((item,index) => {
	// 						return(
	// 							<div key={index}>
	// 								<li>{item.comment}</li>
	// 								<li>-----{item.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(item.date)))}</li>
	// 								<br/>
	// 							</div>
	// 						);
	// 					})}
	// 				</ul>
	// 			</div>
	// 		);
	// 	} else {
	// 		return (
	// 			<div></div>
	// 		);
	// 	}
	// }

	if(c!=null) 
		return(
			<div className="col-12 col-md-5 m-1">
				<h4>COMMENTS</h4>
				<ul className="list-unstyled">
					{c.map((comment) => {
						return(
							<li key={comment.id}>
								<p>{comment.comment}</p>
								<p>{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
							</li>
						);
					})}
				</ul>
			</div>
		);
	else 
		return(
			<div></div>
		);
}

	render() {

		// const detail = this.props.dishes1.map((item) => {

		// 	return(
		// 		<div key={item.id} className="col-12 col-md-5 m-1">
		//  			<Card onClick={() => this.onDishSelect(item)}>
		//  					<CardImg width="100%" src={item.image} alt={item.name}/>
		//  				<CardImgOverlay body className="ml-5">
		//  					<CardTitle heading>{item.name}</CardTitle>
		//  				</CardImgOverlay>
		//  			</Card>
		// 		</div>

		// 		<div key={item.id} className="col-12 col-md-5 m-1">
		//  			<Card onClick={() => this.onDishSelect(item)}>
		//  					<CardImg width="100%" src={item.image} alt={item.name}/>
		//  				<CardImgOverlay body className="ml-5">
		//  					<CardTitle heading>{item.name}</CardTitle>
		//  				</CardImgOverlay>
		//  			</Card>
		// 		</div>
				
		// 	)
		// })

		console.log('Dishdetail component componentDidMount invoked');

	if(this.props.dishes1 != null)
		return(
			<div className="container">
				<div className="row">
					{this.renderDish(this.props.dishes1)}
					{this.renderComments(this.props.dishes1.comments)}
				</div>
			</div>
		);
	else 
		return (
			<div></div>
			);

	}
}
export default Dishdetail;




// {/{this.renderDish(this.state.selectedDish)}
// {this.renderComments(this.state.selectedDish)}/}

//add this in the final return
// <div className="container">
// <div className="row">
// 	{detail}
// 	{this.renderDish(this.props.dish)}
// 	this.renderComments(this.props.dish.comments)}
// 	</div>
// 	</div>














