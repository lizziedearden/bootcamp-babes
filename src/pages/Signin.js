import { render } from '@testing-library/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import './Signin.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner';
import LogIn from './LogIn';

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
                <Banner title='Welcome' text=''/>
                <hr />
                <p className="description"> This is the sign in page</p>
                <div className= "sign">
                    <LogIn getUsers={this.getUsers}/>
                </div>
                <Link to = "/profile">
                <button className="login">Sign in</button></Link>
                <Link to = "/Signup" className="link">Aren't registered sign up here</Link>
            </div>
        )
    }
}
   
export default Signin