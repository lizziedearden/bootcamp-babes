import React from 'react'
import Navbar from '../Components/Navbar'


const Signin = () => {
    return(
        <div>
        <Navbar/>
        <h1>Welcome</h1>
        <p> This is the sign in page</p>
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
        </div>
    )
}
export default Signin