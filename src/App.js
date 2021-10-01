
import './App.css';
import { Route, Switch } from 'react-router-dom';
import './Components/Parallax.css'
import Signin from './pages/Signin';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Profile from './pages/Profile';


function App() {
  return (
    <div className="App">
       

         <Switch>
          <Route path = '/'  component={Home} exact/>
          <Route path= '/Signin' component={Signin}/>
          <Route path ='/Admin' component= {Admin}/>
          <Route path ='/Signup' component={Signup}/>
          <Route path ='/Profile' component={Profile}/>
         </Switch> 
         
    </div>
  


  );
}


export default App;
