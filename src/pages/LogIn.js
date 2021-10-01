import React from 'react';
import axios from 'axios';

class LogIn extends React.Component {
    constructor (props){
      super(props);

      this.state = {
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
        email: this.state.email,
        password: this.state.password,
      };

      console.log(user);
  
      axios.post(`http://localhost:8081/api/users/login`, user)
        .then(() => {
          this.setState ({
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
            <label>
              Email:
              <input type="text" name="email" id="email" onChange={this.handleChange} />
            </label>
            <label>
              Password:
              <input type="text" name="password" id="password" onChange={this.handleChange} />
            </label>
            <button type="Log in">Sign In</button>
          </form>
        </div>
      )
    }
  }
  
  export default LogIn