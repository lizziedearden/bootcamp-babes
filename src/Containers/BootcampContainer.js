import React from 'react'
import CourseList from '../Components/CourseList'
import Course from '../Components/Course'

class BootcampContainer extends React.Component{
    constructor (props) {
        super(props);

        this.state = {
            loaded:false,
            courses: []
        }
    
        this.addNewCourse = this.addNewCourse.bind(this);
    }

    componentDidMount() {
        this.getCourseData();
    }

    getCourseData(){
        fetch("http://localhost:8081/api/courses")
        .then((response) => response.json())
        .then(data => this.setState({courses: data, loaded:true}))
        .catch(err => console.log(err))
    }

    addNewCourse(newCourse){
        fetch("http://localhost:8081/api/courses",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCourse)
        })
        const updatedCourses = [...this.state.courses, newCourse];
        this.setState({ courses: updatedCourses });
    }

    render(){

        return (
            <>
                <h1>CinemaDB</h1>
                <NewCourse handleCourseSubmission={this.addNewCourse}/>
                <hr/>
                <CourseList courses={this.state.courses}/>
            </>
        )
    }
}

export default BootcampContainer;