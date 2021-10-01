import { render } from '@testing-library/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import './Signin.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

class Signin extends React.Component{
    constructor (props){
        super(props);
        this.state={
            Users: []
        }
        this.geUsersCourses = this.getUsers.bind(this);
    }
    componentDidMount(){
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
        return(
            <div className="hero">
            <Navbar/>
            <h1 className= "hello">Welcome</h1>
            <p className="description"> This is the sign in page</p>
            <div className= "sign">
                <div className= "sign-in">
                    <label htmlFor="username"></label>
                    <input type="text" name="username" placeholder="username"></input>
                </div>
                <div className="sign-in">
                    <label htmlFor ="password"></label>
                    <input type="password" name="password" placeholder="password"></input>
                </div>
                </div>
                <Link to = "/profile">
                <button className="login">Sign in</button></Link>
                <Link to = "/Signup" className="link">Aren't registered sign up here</Link>
            </div>
        )
    }
}
   
export default Signin