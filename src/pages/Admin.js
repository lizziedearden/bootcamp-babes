import React from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios';
import UsersList from './UsersList';
import Banner from '../Components/Banner';
import DeleteUser from '../pages/DeleteUser';
import NewUser from './NewUser';
import CoursesListTable from './CoursesListTable';
import { Card } from 'react-bootstrap';


class Admin extends React.Component{
    constructor (props){
      super(props);
      
      this.state = {
        users: [],
        courses: []
      }
  
      this.getUsers = this.getUsers.bind(this);
      this.getCourses = this.getCourses.bind(this);
    }
    
  
    componentDidMount() {
      this.getUsers();
      this.getCourses();
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
  
    render() {
        return (
            <div>
              <Navbar/> 
              <Banner title='Administration' text=''/>
              <div id="accordion">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Users
                      </button>
                    </h5>
                  </div>
                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                      <div class="card-body">
                        <UsersList users={this.state.users}/>
                      </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Courses
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                      <CoursesListTable courses={this.state.courses} />
                    </div>
                  </div>
                </div>
              </div>

              {/* <UsersList users={this.state.users}/>
              <DeleteUser getUsers={this.getUsers} />
              <NewUser getUsers={this.getUsers} /> */}
            </div>
        )
    }
  }
  
  export default Admin
  
