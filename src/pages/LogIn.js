import React from 'react';
import axios from 'axios';
import './LogIn.css';
import { Link } from 'react-router-dom';
import {
 
  Container,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";

class LogIn extends React.Component {
    constructor (props){
      super(props);

      this.state = {
        email: '',
        password: ''
      }
    }
    
  
    handleChange = (event) => {
      this.setState( { [event.target.id]: event.target.value } )
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const user = {
        email: this.state.email,
        password: this.state.password,
      };

      console.log(user);
  
      axios.post(`http://localhost:8081/api/users/login`, user)
        .then(() => {
          this.setState ({
          email: '',
          password: ''})
        })
         .then(() => {
           this.props.getUsers();
         }) 
    }
  
    render() {

      return (
        <div>
           
            <form onSubmit={this.handleSubmit}>
           
        <label className="signin-font">
          Email
               
        <input type="text" name="email" id="email" placeholder="Enter email..." onChange={this.handleChange} />
      </label>
      <label className="signin-font">
        Password
        
        <input type="password" name="password" id="password" placeholder="Enter password..." onChange={this.handleChange} />
      </label>
      <Link to ="/Profile">
      <button className="signup-button" type="Create User">Sign in</button></Link>
      <Link to = "/Signup" className="link">Aren't registered? Sign up here...</Link>
    </form>
    
)
  </div>
      // return (
      //   <Container className="box">
      //   <Row>
      //     <Col md="4">
      //     <Form onSubmit={this.handleSubmit}>
      //     <Form.Group controlId="emailId">
      //           <Form.Label>email</Form.Label>
      //           <Form.Control
      //             type="text"
      //             name="email"
      //             placeholder="Enter email"
      //             value={this.state.email}
      //             onChange={this.handleChange}
      //           />
      //           <FormControl.Feedback type="invalid"></FormControl.Feedback>
      //         </Form.Group>
      //         <Form.Group controlId="passwordId">
      //           <Form.Label>Your password</Form.Label>
      //           <Form.Control
      //             type="password"
      //             name="password"
      //             placeholder="Enter password"
      //             value={this.password}
      //            onChange={this.handleChange}
      //           />
      //           <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
      //         </Form.Group>
              
      //         <Link to = "/profile">
      //           <button  className="sigin-button" type="login">Sign in</button></Link>
      //           <Link to = "/Signup" className="link">Aren't registered sign up here</Link>
      //     </Form>
      //     </Col>
      //     </Row>
      //     </Container>
      // )
      )
    }
  
  
  }
  
  export default LogIn