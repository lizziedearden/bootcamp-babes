import './App.css';
// import BootcampContainer from './Containers/BootcampContainer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import Header from './Components/Header';
import Banner from './Components/Banner';
import Card from './Components/Card';
import Navbar from './Components/Navbar';
import './Components/Parallax.css'
import Signin from './pages/Signin';
import Admin from './pages/Admin';
import Home from './pages/Home';




function App() {
  return (
    <div className="App">
      
        <Switch>
          <Route path = '/'  component={Home} exact/>
          <Route path= '/Signin' component={Signin}/>
          <Route path ='/Admin' component= {Admin}/>
         </Switch>
         
    </div>
  );
}


export default App;
