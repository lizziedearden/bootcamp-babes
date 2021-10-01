import React from 'react';
import axios from 'axios';

class NewUser extends React.Component {
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
          name: "",
          email: "",
          password: ""})
        })
         .then(() => {
           this.props.getUsers();
         }) 
    }
  
    render() {
      return (
        <div>
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Add New User</h5>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
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
              <button type="Create User">Save New User</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      )
    }
  }
  
  export default NewUser