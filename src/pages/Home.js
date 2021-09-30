import React from 'react'
import '../Components/Parallax.css'
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Navbar  from "../Components/Navbar";
import CoursesList from "../Containers/CoursesList"
import NewCourse from "../Containers/NewCourse"
import DeleteCourse from '../Containers/DeleteCourse';
import axios from 'axios';


class Home extends React.Component{
  constructor (props){
    super(props);
    
    this.state = {
      courses: []
    }

    this.getCourses = this.getCourses.bind(this);
  }
  

  componentDidMount() {
    this.getCourses();
  }

  getCourses(){
      axios.get(`http://localhost:8081/api/courses`)
        .then(res => {
          const courses = res.data;
          this.setState({ courses });
        })
  }

  render() {
      return (
          <div>
            <Navbar/> 
            <Header />
            <Banner title='Course' text='Here are the courses we have to offer...'/>
            <CoursesList courses={this.state.courses}/>
            <NewCourse getCourses={this.getCourses}/>
            <DeleteCourse />
          </div>
      )
  }
}

export default Home
