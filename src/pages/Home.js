
import React from 'react'
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Navbar  from "../Components/Navbar";



const Home = () => {
    return (
        <div>
             <Navbar/> 
            <Header />
        <Banner title='Course' text='Here are the courses we have to offer...'/>
        <AboutCoursesSection /> 
           
            
        </div>
    )
}
function AboutCoursesSection() {
    return (
      <div className="container-fluid aboutCourses">
        <div className="row">
          <div className="col-sm-4" align="center">
            <Card title="Course Title: " />
          </div>
          <div className="col-sm-4" align="center">
            <Card title="Course Title: "/>
          </div>
          <div className="col-sm-4" align="center">
            <Card title="Course Title: "/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4" align="center">
            <Card title="Course Title: "/>
          </div>
          <div className="col-sm-4" align="center">
            <Card title="Course Title: "/>
          </div>
          <div className="col-sm-4" align="center">
            <Card title="Course Title: "/>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4" align="center">
            <Card title="Course Title: "/>
          </div>
          <div className="col-sm-4" align="center">
            <Card title="Course Title: "/>
          </div>
          <div className="col-sm-4" align="center">
            <Card title="Course Title: "/>
          </div>
        </div>
      </div>
    )
  }

export default Home
