import './App.css';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Card from './Components/Card';
import nebula from './resources/nebula.jpeg';


function AboutCoursesSection() {
  return (
    <div className="container-fluid aboutCourses">
      <div className="row">
        <div className="col-sm-4" align="center">
          <Card title="Something" />
        </div>
        <div className="col-sm-4" align="center">
          <Card title = "hello" />
        </div>
        <div className="col-sm-4" align="center">
          <Card />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4" align="center">
          <Card />
        </div>
        <div className="col-sm-4" align="center">
          <Card />
        </div>
        <div className="col-sm-4" align="center">
          <Card />
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <Header />
        <Banner title='Course' text='Here are the courses we have to offer...'/>
        <AboutCoursesSection />
    </div>
  );
}


export default App;
