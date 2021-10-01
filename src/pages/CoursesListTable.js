import React from 'react';
import CourseTable from '../Components/CourseTable'
import axios from 'axios';
import '../Components/CourseTable.css'

export default class CoursesListTable extends React.Component {

  render() {
    return (
        <div>
            <h3>List of Courses</h3>
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Subcategory</th>
                        <th>Deadline</th>
                        <th>Cost</th>
                        <th>Location</th>
                        <th>Place</th>
                        <th>Spaces Available</th>
                        <th>Sign Up Link</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.courses.map(course => 
                    <CourseTable id={course.id}
                    name={course.name} 
                    description={course.description}
                    category={course.category}
                    subcategory={course.subcategory}
                    deadline={course.deadline}
                    cost={course.cost}
                    location={course.location}
                    place={course.place}
                    spacesAvailable={course.spacesAvailable}
                    signUpThrough={course.signUpThrough} />
                    )}
                </tbody>
            </table>
        </div>

    )}
}

