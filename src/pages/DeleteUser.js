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
        <form onSubmit={this.handleSubmit}>
          <label>
            Course ID:
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    )
  }
}