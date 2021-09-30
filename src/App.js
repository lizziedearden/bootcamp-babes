
import './App.css';
import { Route, Switch } from 'react-router-dom';
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
