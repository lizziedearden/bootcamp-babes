import React from 'react';
import axios from 'axios';

class NewCourse extends React.Component {
    state = {
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
  
    handleChange = event => {
      this.setState({ name: event.target.value, 
          rating: event.target.value,
          description: event.target.value,
          category: event.target.value,
          subcategory: event.target.value,
          cost: event.target.value,
          deadline: event.target.value,
          location: event.target.value,
          location: event.target.value,
          place: event.target.value,
          spacesAvailable: event.target.value,
          signUpThrough: event.target.value
       })
      // this.setState({ rating: event.target.value }),
      // this.setState({ description: event.target.value }),
      // this.setState({ category: event.target.value }),
      // this.setState({ subcategory: event.target.value }),
      // this.setState({ cost: event.target.value }),
      // this.setState({ deadline: event.target.value }),
      // this.setState({ location: event.target.value }),
      // this.setState({ place: event.target.value }),
      // this.setState({ spacesAvailable: event.target.value }),
      // this.setState({ signUpThrough: event.target.value });
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
  
      axios.post(`http://localhost:8081/api/courses`, { course })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Course Name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <label>
              Course Rating:
              <input type="number" name="rating" onChange={this.handleChange} />
            </label>
            <label>
              Course Description:
              <input type="text" name="description" onChange={this.handleChange} />
            </label>
            <label>
              Course Category:
              <input type="text" name="category" onChange={this.handleChange} />
            </label>
            <label>
              Course Subcategory:
              <input type="text" name="subcatergory" onChange={this.handleChange} />
            </label>
            <label>
              Course Cost:
              <input type="number" name="cost" onChange={this.handleChange} />
            </label>
            <label>
              Course Deadline:
              <input type="text" name="deadline" onChange={this.handleChange} />
            </label>
            <label>
              Course Location:
              <input type="text" name="location" onChange={this.handleChange} />
            </label>
            <label>
              Course Place:
              <input type="text" name="place" onChange={this.handleChange} />
            </label>
            <label>
              Course Spaces Available:
              <input type="number" name="spacesAvailable" onChange={this.handleChange} />
            </label>
            <label>
              Course Sign Up Through:
              <input type="text" name="signUpThrough" onChange={this.handleChange} />
            </label>
            <button type="submit">Add</button>
          </form>
        </div>
      )
    }
  }
  
  export default NewCourse