import React from 'react';
import axios from 'axios';

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
              <label>
                Name:
                <input type="text" name="name" id="name" onChange={this.handleChange} />
              </label>
              <label>
                Email:
                <input type="text" name="email" id="email" onChange={this.handleChange} />
              </label>
              <label>
                Password:
                <input type="text" name="password" id="password" onChange={this.handleChange} />
              </label>
              <button type="Create User">Create New User</button>
            </form>
          </div>
         
          );
    }
  }
  
  export default SignUpNewUser