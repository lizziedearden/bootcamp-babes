import { render } from '@testing-library/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios';
import './Profile.css'
import { Link } from 'react-router-dom';

import Banner from '../Components/Banner';
class Profile extends React.Component{
    render() {
        return(
            <div>
            <Navbar/>
            <p className="userProfile"> Welcome to your user profile</p>
            <button className="myCourses">View my courses</button>
            <hr />
            <button className="wishlist">View my wishlist</button>
            
    
                <Link to = "/profile"> 
                <button className="delete">Delete my profile</button></Link>
            </div>
        )
    }
    
} 
export default Profile