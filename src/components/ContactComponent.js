import React from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Label, Col, Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, Form, Errors } from 'react-redux-form'
//import {postFeedback} from '../redux/ActionCreators';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleInputChange = this.handleInputChange.bind(this);
        //this.handleBlur = this.handleBlur.bind(this);
    }

    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     const name = target.name;

    //     this.setState({
    //         [name]: value
    //     })
    // }

    handleSubmit(event) {
        // console.log("Current state is"+JSON.stringify(values));
        alert("Current state is"+JSON.stringify(event));
        this.props.resetFeedbackForm();
        this.props.postFeedback(this.props.dishId, event.firstname, event.lastname, event.telnum, event.email, event.agree,event.contactType, event.message);
        
        //event.preventDefault();
    } 

    // handleBlur = (field) => (evt) => {
    //     this.setState({
    //         touched: { ...this.state.touched, [field]: true}
    //     });
    // }

    // validate(firstname, lastname, telnum, email) {
    //     const errors = {
    //         firstname: '',
    //         lastname: '',
    //         telnum: '',
    //         email: ''
    //     };

    //     if(this.state.touched.firstname && firstname.length < 3)
    //         errors.firstname = 'First name should be >= 3 characters';
    //     else if(this.state.touched.firstname && firstname.length > 10)
    //         errors.firstname = 'First name should be <= 10 characters';

    //     if(this.state.touched.lastname && lastname.length < 3)
    //         errors.lastname = 'Last name should be >= 3 characters';
    //     else if(this.state.touched.lastname && lastname.length > 10)
    //         errors.lastname = 'Last name should be <= 10 characters';
        
    //     const reg = /^\d+$/;
    //     if(this.state.touched.telnum && !reg.test(telnum))
    //         errors.telnum = 'Tel. number should comtain only numbers';

    //     if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
    //         errors.email = 'Email should contain an @ sign';
    
    //     return errors;

    // }

    render() {

        //const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email)
        return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>CONTACT US</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact us</h3>
                    <hr/>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href=""><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>

            <div className="row row-container">
                <div className="col-12">
                    <h3>Send us your feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form model="feedback" onSubmit={this.handleSubmit}>
                        <Row className="form-group">
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Control.text model=".firstname" id="firstname" name="firstname"
                                    placeholder="Enter First name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                     />
                                <Errors
                                    className="text-danger"
                                    model=".firstname"
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
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Control.text model=".lastname" id="lastname" name="lastname"
                                    placeholder="Enter last name"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                    />
                                <Errors
                                    className="text-danger"
                                    model=".lastname"
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
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                            <Col md={10}>
                                <Control.text model=".telnum" id="telnum" name="telnum"
                                    placeholder="Enter Tel. number"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                    }}
                                     />
                                <Errors
                                    className="text-danger"
                                    model=".telnum"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        minLength: 'Must be greater than 2 numbers',
                                        maxLength: 'Must be fifteen numbers or less',
                                        isNumber: "Must be a number"
                                    }}
                                />
                            </Col>
                        </Row>
                         <Row className="form-group">
                            <Label htmlFor="email" md={2}>Email </Label>
                            <Col md={10}>
                                <Control.text model=".email" id="email" name="email"
                                    placeholder="Enter Email"
                                    className="form-control"
                                    validators={{
                                        required, validEmail
                                    }}
                                     />
                                 <Errors
                                    className="text-danger"
                                    model=".email"
                                    show="touched"
                                    messages={{
                                        required: 'Required',
                                        validEmail: 'Invaid Email Address'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size: 6, offset: 2}}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox model=".agree" name="agree"
                                            className="form-check-input"
                                            /> {' '}
                                            <strong>May we contact you?</strong>
                                    </Label>
                                </div>
                            </Col>
                            <Col md={{size: 3, offset: 1}}>
                                <Control.select model=".contactType" name="contactType"
                                   className="form-control">
                                    <option>Tel.</option>
                                    <option>Email</option>
                                </Control.select>
                            </Col>
                        </Row>
                         <Row className="form-group">
                            <Label htmlFor="message" md={2}>Your Feedback </Label>
                            <Col md={10}>
                                <Control.textarea model=".message" id="message" name="message"
                                    rows="12"
                                    className="form-control"/>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col md={{size: 10, offset: 2}}>
                                <Button type="submit" color="primary">
                                    Send Feedback
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
        );
    }
}
    

export default Contact;



// LINE 124 <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
