import { render } from '@testing-library/react'
import React from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios';
import './Profile.css'
import './AdminButton.css'
import { Link } from 'react-router-dom';
import Feedback from '../Components/Feedback';
import Wishlist from '../Components/Wishlist';
import Banner from '../Components/Banner';
import DeleteUser from '../Components/DeleteUser';
import NewFeedback from '../Components/NewFeedback';


class Profile extends React.Component{
    constructor (props){
        super(props);
        
        this.state = {
          users: [],
          courses: [],
          feedbackList: [],
          wishlist: []
        }
    
        this.getUsers = this.getUsers.bind(this);
        this.getCourses = this.getCourses.bind(this);
        this.getFeedback = this.getFeedback.bind(this);
        this.getWishlist = this.getWishlist.bind(this);
      }
      
    
      componentDidMount() {
        this.getUsers();
        this.getCourses();
        this.getFeedback();
        this.getWishlist();
      }
    
      getCourses(){
          axios.get(`http://localhost:8081/api/courses`)
            .then(res => {
              const courses = res.data;
              this.setState({ courses });
            })
      }
    
      getUsers(){
          axios.get(`http://localhost:8081/api/users`)
            .then(res => {
              const users = res.data;
              this.setState({ users });
            })
      }

      getFeedback(){
          axios.get(`http://localhost:8081/api/feedback`)
          .then(res => {
              const feedbackList = res.data;
              this.setState({feedbackList});
          })
      }
      getWishlist(){
        axios.get(`http://localhost:8081/api/wishlist/3`)
        .then(res => {
            const wishlist = res.data;
            this.setState({wishlist});
        })
    }


    render() {
        return(
            <div>
                <Navbar/>
                <Banner title='Your Profile' text='Welcome to your user profile'/>
                <Link to = "/profile"></Link>
                <p>
                <hr />
                <button class="btn btn-save" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">View Feedback</button>
                <hr />
                <button class="btn btn-update" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">View Wishlist</button>
                <hr />
                <button type="button" class="btn btn-get" data-bs-toggle="modal" data-bs-target="#addFeedbackModalCenter">Add Feedback</button>
                  <div class="modal fade" id="addFeedbackModalCenter" tabindex="-1" role="dialog" aria-labelledby="addFeedbackModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <NewFeedback getFeedback={this.getFeedback}/>
                      </div>
                    </div>
                  </div>
                <hr />
                <button type="button" class="btn btn-delete" data-bs-toggle="modal" data-bs-target="#deleteUserModalCenter">Delete My Profile</button>
                  <div class="modal fade" id="deleteUserModalCenter" tabindex="-1" role="dialog" aria-labelledby="deleteUserModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <DeleteUser getUsers={this.getUsers}/>
                      </div>
                    </div>
                  </div>
                </p>
                <div class="row">
                    <Feedback feedbackList={this.state.feedbackList}/>
                    <Wishlist wishlist={this.state.wishlist} />
                </div>
            </div>
        )
    }
    
} 
export default Profile