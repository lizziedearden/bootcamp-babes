import React from 'react'

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
        
    }

    render() {
        return (
            <>
                <h1>CoursesDB</h1>
                <hr />
            </>
        )
    }
}

export default BootcampContainer;