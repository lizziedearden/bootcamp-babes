import React from 'react';
import axios from 'axios';

export default class DeleteUser extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: '',
          }
    }
  

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://localhost:8081/api/users/${this.state.id}`)
      .then(() => {
        this.state = {
            id: '',
          }
      })
      .then(() => {
        this.props.getUsers();
      }) 
  }

  render() {
    return (
      <div>
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLongTitle">Delete User</h5>
          <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form onSubmit={this.handleSubmit}>
            <label>
              User ID:
              <input type="text" name="id" onChange={this.handleChange} />
            </label>
            <button type="submit">Delete User</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    )
  }
}
   