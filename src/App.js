import './App.css';

import BootcampContainer from './Containers/BootcampContainer';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import './Components/Parallax.css'




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

// move to an about courses.js

function App() {
  return (
    <div className="App">
        
      <BootcampContainer />
    </div>
  );
}


export default App;
