import React from 'react';
import Card from './Card'
import axios from 'axios';

export default class CoursesList extends React.Component {

  render() {
    return (
      <div className="container-fluid aboutCourses">
        <div className="row">
          {this.props.courses.map(course =>
            <div className="col-sm-4" align="center">
              <Card title={course.name} text={course.category} description={course.description} deadline={course.deadline}
                spacesAvailable={course.spacesAvailable} place={course.place} signUpThrough ={course.signUpThrough}/>
            </div>)}
        </div>
      </div>
    )
  }
}