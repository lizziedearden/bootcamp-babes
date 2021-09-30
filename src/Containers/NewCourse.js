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
              <input type="text" name="category" id="category" onChange={this.handleChange} />
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
              <input type="text" name="location" id="location" onChange={this.handleChange} />
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
      )
    }
  }
  
  export default NewCourse