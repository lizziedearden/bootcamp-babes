import './App.css';
// import BootcampContainer from './Containers/BootcampContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path = '/' component ={Navbar}/>

        
                
        </Switch>
        <Navbar />
        <Header />
        <Banner title='Course' text='Here are the courses we have to offer...'/>
        <AboutCoursesSection />
        {/* <BootcampContainer /> */}
    </div>
  );
}


export default App;
