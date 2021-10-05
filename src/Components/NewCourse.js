import React from 'react';
import axios from 'axios';

class NewCourse extends React.Component {
    constructor (props){
      super(props);

      this.state = {
        name: '',
        rating: 0,
        description: '',
        category: '',
        subcategory: '',
        cost: 0,
        deadline: '',
        location: '',
        place: '',
        spacesAvailable: 0,
        signUpThrough: ''
      }


    }
    
  
    handleChange = (event) => {
      this.setState( { [event.target.id]: event.target.value } )

      // this.setState({ name: event.target.value, 
      //     rating: event.target.value,
      //     description: event.target.value,
      //     category: event.target.value,
      //     subcategory: event.target.value,
      //     cost: event.target.value,
      //     deadline: event.target.value,
      //     location: event.target.value,
      //     place: event.target.value,
      //     spacesAvailable: event.target.value,
      //     signUpThrough: event.target.value
      //  })
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const course = {
        name: this.state.name,
        rating: this.state.rating,
        description: this.state.description,
        category: this.state.category,
        subcategory: this.state.subcategory,
        cost: this.state.cost,
        deadline: this.state.deadline,
        location: this.state.location,
        place: this.state.place,
        spacesAvailable: this.state.spacesAvailable,
        signUpThrough: this.state.signUpThrough
      };

      console.log(course);
  
      axios.post(`http://localhost:8081/api/courses`, course)
        .then(() => {
          this.setState ({
          name: '',
          rating: 0,
          description: '',
          category: '',
          subcategory: '',
          cost: 0,
          deadline: '',
          location: '',
          place: '',
          spacesAvailable: 0,
          signUpThrough: ''})
          })
         .then(() => {
           this.props.getCourses();
         }) 
    }
  
    render() {
      return (
        <div>
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">Add New Course</h5>
            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form onSubmit={this.handleSubmit}>
              <label>
                Course Name:
                <input type="text" name="name" id="name" onChange={this.handleChange} />
              </label>
              <label>
                Course Rating:
                <input type="number" name="rating" id="rating" onChange={this.handleChange} />
              </label>
              <label>
                Course Description:
                <input type="text" name="description" id="description" onChange={this.handleChange} />
              </label>
              <label>
                Course Category:
                {/* <input type="text" name="category" id="category" onChange={this.handleChange} /> */}
                <select id="category" name="category" onChange={this.handleChange} >
                  <option value="SOFTWARE_ENGINEERING">Software Engineering</option>
                  <option value="DATA_SCIENCE">Data Science</option>
                  <option value="NEUROSCIENCE">Neuroscience</option>
                  <option value="MATHEMATICS">Mathematics</option>
                  <option value="INVESTING">Investing</option>
                  <option value="YOUTUBE">Youtube</option>
                  <option value="UX_DESIGN">UX Design</option>
                  <option value="COOKING">Cooking</option>
                  <option value="PAINTING">Painting</option>
                  <option value="FITNESS">Fitness</option>
                  <option value="MINDFULNESS">Mindfulness</option>
                  <option value="DATING">Dating</option>
                  <option value="PARENTING">Parenting</option>
                  <option value="PHYSICS">Physics</option>
                  <option value="CHEMISTRY">Chemistry</option>
                  <option value="ELECTRONICS">Electronics</option>
                  <option value="MUSIC">Music</option>
                  <option value="ENTREPRENEURSHIP">Entrepreneurship</option>
                  <option value="COMEDY">Comedy</option>
                  <option value="ACTING">Acting</option>
                  <option value="PUBLIC_SPEAKING">Public Speaking</option>
                  <option value="PSYCHOLOGY">Psychology</option>
                </select>
              </label>
              <label>
                Course Subcategory:
                <input type="text" name="subcategory" id="subcategory" onChange={this.handleChange} />
              </label>
              <label>
                Course Cost:
                <input type="number" name="cost" id="cost" onChange={this.handleChange} />
              </label>
              <label>
                Course Deadline:
                <input type="text" name="deadline" id="deadline" onChange={this.handleChange} />
              </label>
              <label>
                Course Location:
                {/* <input type="text" name="location" id="location" onChange={this.handleChange} /> */}
                <select id="location" name="location" onChange={this.handleChange} >
                  <option value="ONLINE">Online</option>
                  <option value="IN_PERSON">In person</option>
                </select>
              </label>
              <label>
                Course Place:
                <input type="text" name="place" id="place" onChange={this.handleChange} />
              </label>
              <label>
                Course Spaces Available:
                <input type="number" name="spacesAvailable" id="spacesAvailable" onChange={this.handleChange} />
              </label>
              <label>
                Course Sign Up Through:
                <input type="text" name="signUpThrough" id="signUpThrough" onChange={this.handleChange} />
              </label>
              <button type="submit">Add</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
        
      )
    }
  }
  
  export default NewCourse