import React from 'react';
import axios from 'axios';

class NewFeedback extends React.Component {
    constructor (props){
      super(props);

      this.state = {
        courseId: '',
        userId: '',
        rating: '',
        comment: '',
        createdAt: '2021-10-03T20:51:48.383804'
      }
    }
  
    handleChange = (event) => {
      this.setState( { [event.target.id]: event.target.value } )
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const feedback = {
        courseId: this.state.courseId,
        userId: this.state.userId,
        rating: this.state.rating,
        comment: this.state.comment,
        createdAt: this.state.createdAt
      };

      console.log(feedback);
  
      axios.post(`http://localhost:8081/api/feedback`, feedback)
        .then(() => {
          this.setState ({
            courseId: '',
            userId: '',
            rating: '',
            comment: '',
            createdAt: '2021-10-03T20:51:48.383804'})
        })
         .then(() => {
           this.props.getFeedback();
         }) 
    }
  
    render() {
      return (
        <div>
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Add Feedback</h5>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form onSubmit={this.handleSubmit}>
              <label>
                Course ID:
                <input type="text" name="courseId" id="courseId" onChange={this.handleChange} />
              </label>
              <label>
                User ID:
                <input type="text" name="userId" id="userId" onChange={this.handleChange} />
              </label>
              <label>
                Rating:
                <input type="text" name="rating" id="rating" onChange={this.handleChange} />
              </label>
              <label>
                Comment:
                <input type="text" name="comment" id="comment" onChange={this.handleChange} />
              </label>
              <button type="Create User">Add Feedback</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      )
    }
  }
  
  export default NewFeedback