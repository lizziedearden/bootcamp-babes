import React from 'react'
import Navbar from '../Components/Navbar'
import './Signin.css'

const Signin = () => {
    return(
        <div className="hero">
        <Navbar/>
        <h1 className= "hello">Welcome</h1>
        <p className = "signin-p"> This is the sign in page</p>
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
            <button className="login">Sign in</button>
            <a href="#" className="link">Aren't registered sign up here</a>
        </div>
    )
}
export default Signin