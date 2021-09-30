import React from 'react';
import Card from '../Components/Card'
import axios from 'axios';

export default class CoursesList extends React.Component {
  state = {
    courses: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8081/api/courses`)
      .then(res => {
        const courses = res.data;
        this.setState({ courses });
      })
  }

  render() {
    return (
      <div className="container-fluid aboutCourses">
        <div className="row">
          {this.state.courses.map(course => 
              <div className="col-sm-4" align="center">
                <Card title={course.name} text={course.category} description={course.description} deadline={course.deadline}/>
              </div>)}
        </div>
      </div>
    )
  }
}