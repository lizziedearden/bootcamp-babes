import React from 'react'
import Navbar from '../Components/Navbar'
import axios from 'axios';
import UsersList from './UsersList';
import Banner from '../Components/Banner';
import DeleteUser from '../pages/DeleteUser';
import NewUser from './NewUser';
import CoursesListTable from './CoursesListTable';
import DeleteCourse from '../Containers/DeleteCourse';
import NewCourse from '../Containers/NewCourse';
import UpdateCourse from '../Containers/UpdateCourse';
import './AdminButton.css'




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
                      <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Users
                      </button>
                    </h5>
                  </div>
                  <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                      <div class="card-body">
                        <UsersList users={this.state.users}/>
                      </div>
                  </div>


                  <button type="button" class="btn btn-save" data-bs-toggle="modal" data-bs-target="#saveUserModalCenter">Add User</button>
                  <div class="modal fade" id="saveUserModalCenter" tabindex="-1" role="dialog" aria-labelledby="saveUserModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <NewUser getUsers={this.getUsers}/>
                      </div>
                    </div>
                  </div>
                  {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateUserModalCenter">Update User</button>
                  <div class="modal fade" id="updateUserModalCenter" tabindex="-1" role="dialog" aria-labelledby="updateUserModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <UpdateUser getUsers={this.getUsers}/>
                      </div>
                    </div>
                  </div> */}
                  <button type="button" class="btn btn-delete" data-bs-toggle="modal" data-bs-target="#deleteUserModalCenter">Delete User</button>
                  <div class="modal fade" id="deleteUserModalCenter" tabindex="-1" role="dialog" aria-labelledby="deleteUserModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <DeleteUser getUsers={this.getUsers}/>
                      </div>
                    </div>
                  </div>
                
                </div>

                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Courses
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div class="card-body">
                      <CoursesListTable courses={this.state.courses} />
                    </div>
                  </div>

                  <button type="button" class="btn btn-save" data-bs-toggle="modal" data-bs-target="#saveCourseModalCenter">Add Course</button>
                  <div class="modal fade" id="saveCourseModalCenter" tabindex="-1" role="dialog" aria-labelledby="saveCourseModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <NewCourse getCourses={this.getCourses}/>
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn btn-update" data-bs-toggle="modal" data-bs-target="#updateCourseModalCenter">Update Course</button>
                  <div class="modal fade" id="updateCourseModalCenter" tabindex="-1" role="dialog" aria-labelledby="updateCourseModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <UpdateCourse getCourse={this.getCourses}/>
                      </div>
                    </div>
                  </div>
                  <button type="button" class="btn btn-delete" data-bs-toggle="modal" data-bs-target="#deleteCourseModalCenter">Delete Course</button>
                  <div class="modal fade" id="deleteCourseModalCenter" tabindex="-1" role="dialog" aria-labelledby="deleteCourseModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                      <div class="modal-content">
                        <DeleteCourse getCourses={this.getCourses} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <UsersList users={this.state.users}/>
              <DeleteUser getUsers={this.getUsers} />
              <NewUser getUsers={this.getUsers} /> 
              <NewCourse getCourses={this.getCourses}/>
            </>
        <UpdateCourse getCourses={this.getCourses} /> */}
            </div>
        )
    }
  }
  
  export default Admin
  
