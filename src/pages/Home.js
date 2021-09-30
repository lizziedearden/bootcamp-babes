import React from 'react'
import '../Components/Parallax.css'
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Navbar  from "../Components/Navbar";
import CoursesList from "../Containers/CoursesList"
import NewCourse from "../Containers/NewCourse"

const Home = () => {
    return (
        <div>
          <Navbar/> 
          <Header />
          <Banner title='Course' text='Here are the courses we have to offer...'/>
          <CoursesList />
          <NewCourse />
        </div>
    )
}

export default Home
