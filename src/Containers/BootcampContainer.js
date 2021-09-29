
// import { render } from '@testing-library/react';
// import axios from 'axios';
// import React from 'react';


// const baseURL = 'http://localhost:8081/api/courses';
// // const api = axios.create({baseURL :"http://localhost:8081/api/courses"})

// function BootcampContainer() {
//     const [course, setCourse] = React.useState(null);

//     React.useEffect(() => {
//         axios.get(baseURL).then((response) => {
//             setCourse(response.data);
//         })
//     }, []);

//     if (!course) return null;

//     return (
//         <div>
//             <h1>{course.name}</h1>
//             <p>{course.id}</p>
//         </div>
//     );
// }










// export default BootcampContainer;


// // class BootcampContainer extends Component {
// //     state = {
// //         courses: []
// //     }

// //     constructor() {
// //         super();
// //         api.get('/').then(res => {
// //             console.log(res.data)
// //             this.setState({courses: res.data})
// //         })
// //     }

// //     createCourse = async () => {
// //         let res = await api.post('/', {name: "test", id: 16, })
// //         console.log(res)
// //     }

// //     render(){
// //         return (
// //             <div>
// //                 <h1>CoursesDB</h1>
// //                 <button onClick={this.createCourse}>createCourse</button>
// //                 {this.state.courses.map(course => <h2>{course.name}</h2>)}
// //             </div>
// //         )
// //     }
// // }






























import React from 'react'
import CourseList from '../Components/CourseList'
import NewCourse from '../Components/Course'

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
        .catch(error => console.log(error))
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
                <CourseList courses={this.state.courses}/>
            </>
        )
    }
}

export default BootcampContainer;