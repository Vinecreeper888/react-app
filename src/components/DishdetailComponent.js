import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, Button, BreadcrumbItem, Row,Col,Label} from 'reactstrap';
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form'

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);


	class CommentForm extends React.Component {

		constructor(props) {
			super(props);

			this.state = {
				isModalOpen: false
			}

			this.toggleModal = this.toggleModal.bind(this);
			this.handleComment = this.handleComment.bind(this);
		}

		toggleModal() {
			this.setState({
				isModalOpen: !this.state.isModalOpen
			})
		}

		handleComment(event) {
			// console.log("Current state is"+JSON.stringify(event));
	  //   	alert("Current state is"+JSON.stringify(event));
	    	//event.preventDefault();	
	    	this.toggleModal();
	    	this.props.addComment(this.props.dishId, event.rating, event.author, event.comment);
		}

		render() {
			return(
				<div>
					<Button color="primary" onClick={this.toggleModal}><i class="fa fa-pencil"></i> Submit Comment</Button>
					<Modal isOpen={this.state.isModalOpen} >
		        	<ModalHeader toggle={this.toggleModal}>Submit your comment</ModalHeader>
		        	<ModalBody>
		        		<LocalForm onSubmit={this.handleComment}>
                        	<Row className="form-group">
                            <Label htmlFor="rating" md={2}>Rating</Label>
                            <Col md={10}>
                               
                                 <Control.select model=".rating" name="rating" id="rating" style={{width: "100%", height: "90%"}}>
                                 	<option selected="selected">1</option>
                                 	<option>2</option>
                                 	<option>3</option>
                                 	<option>4</option>
                                 	<option>5</option>
                                 	<option>6</option>
                                 	<option>7</option>
                                 	<option>8</option>
                                 	<option>9</option>
                                 	<option>10</option>
                                 </Control.select>
                            </Col>
                        	</Row>
                        	<Row className="form-group">
                            <Label htmlFor="author" md={2}>Author</Label>
                            <Col md={10}>
                                <Control.text model=".author" id="author" name="author"
                                    placeholder="Enter Author name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                     />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be fifteen characters or less'
                                    }}
                                 />
                            </Col>
                        	</Row>
                        	<Row className="form-group">
                            <Label htmlFor="Comment" md={2}>Comment</Label>
                            <Col md={10}>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    placeholder="Enter Comment"
                                    className="form-control"
                                 />
                            </Col>
                        	</Row>
                        	<Row className="form-group">
	                            <Col md={{size: 10, offset: 2}}>
	                                <Button type="submit" color="primary">
	                                    Submit
	                                </Button>
	                            </Col>
                        	</Row>
		        		</LocalForm>
		        	</ModalBody>
		        	</Modal>				
		        </div>
			);
		}
	}


	function RenderDish({dish}) {
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

		return (

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


	function RenderComments({comments, addComment, dishId}) {
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

	if(comments != null) 
		return(
			<div className="col-12 col-md-5 m-1">
				<h4>COMMENTS</h4>
				<ul className="list-unstyled">
					{comments.map((comment) => {
						return(
							<li key={comment.id}>
								<p>{comment.comment}</p>
								<p>----{comment.author}, {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
								
							</li>
						);
					})}
				</ul>
				<CommentForm dishId={dishId} addComment={addComment}/>
			</div>
		);
	else 
		return(
			<div></div>
		);
	}

	const DishDetail = (props) => {

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

	if(props.dishes1 != null)
		return(
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
						<BreadcrumbItem active>{props.dishes1.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>{props.dishes1.name}</h3><hr/>
					</div>
				</div>
				<div className="row">
					<RenderDish dish={props.dishes1}/>
					<RenderComments comments={props.comments}
						addComment={props.addComment}
						dishId={props.dishes1.id} />
					
				</div>
			</div>
		);
	else 
		return (
			<div></div>
			);
	}

export default DishDetail;




// {{this.renderDish(this.state.selectedDish)}
// {this.renderComments(this.state.selectedDish)}/}

//add this in the final return
// <div className="container">
// <div className="row">
// 	{detail}
// 	{this.renderDish(this.props.dish)}
// 	this.renderComments(this.props.dish.comments)}
// 	</div>
// 	</div>





/*
<FormGroup>
<Label htmlFor="author">Author</Label>
<Input type="text" id="author" name="author" 
innerRef={(input) => this.author = input}/>
</FormGroup>
<FormGroup>
<Label htmlFor="rating">Rating</Label>
<Input type="text" id="rating" name="rating"
innerRef={(input) => this.rating = input} />
</FormGroup>
<FormGroup>
<Label htmlFor="comment">Comment</Label>
<Input type="textarea" id="comment" name="comment"
innerRef={(input) => this.comment = input} />
</FormGroup>
<Button type="submit" value="submit" color="primary">Submit</Button>
*/











