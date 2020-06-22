import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import Dishdetail from './DishdetailComponent';


class Menu extends Component {

	constructor(props) {
		super(props);

	}


	render() {

		return(<Dishdetail dishes1={this.props.dishes}/>)

	}
}


export default Menu;