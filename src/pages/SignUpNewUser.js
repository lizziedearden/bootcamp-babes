import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SignUpNewUser.css'

class SignUpNewUser extends React.Component {
    constructor (props){
      super(props);

      this.state = {
        name: '',
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
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };

      console.log(user);
  
      axios.post(`http://localhost:8081/api/users`, user)
        .then(() => {
          this.setState ({
          name: '',
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
              <label className="signup-font">
                Name
                <input type="text" name="name" id="name" placeholder="Enter a name..." onChange={this.handleChange} />
              </label>
              <label className="signup-font">
                Email
                <input type="text" name="email" id="email" placeholder="Enter email..." onChange={this.handleChange} />
              </label>
              <label className="signup-font">
                Password
                <input type="password" name="password" id="password" placeholder="Enter a password..." onChange={this.handleChange} />
              </label>
              <button className="signup-button" type="Create User">Create New User</button>
              <Link to = "/Signin" className="redirect">Already have an account signin here</Link>
            </form>
          </div>
         
          );
    }
  }
  
  export default SignUpNewUser