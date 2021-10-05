// import React from "react"

import React, { Component } from "react";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import SignUpNewUser from '../Components/SignUpNewUser'
import {
 
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Navbar
} from "react-bootstrap";

import axios from "axios";
import './Signup.css'


class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []

    }

    this.getUsers = this.getUsers.bind(this);
  }
  
  componentDidMount() {
    this.getUsers();
  }
  
  getUsers(){
    axios.get(`http://localhost:8081/api/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }
  render() {
    return (
      <div>
        <Navbar />
        <Banner title='Sign up' text='Make the most of Bootcamp.io by creating a profile with us!'/>
        <SignUpNewUser getUsers={this.getUsers}/>
      </div>
    )
  }
}
  

export default Signup;
