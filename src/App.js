import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from './Checkout';
import Signup from './Signup';
import Login from './Login';
import Practice from './Practice';
import {useContext} from 'react';
import { AppContext } from './AppContext';
import { useState } from 'react';

function App() {
  let [value,setvalue]=useState(0);
  let [iprice,setiprice]=useState(0);
  let [cartitems,setcartitems]=useState([]);
  
  return (
    <AppContext.Provider value={{value,setvalue,iprice,setiprice,cartitems,setcartitems}}>
    <div className="App">
        {/* header component */}
        
        {/* Routing component*/}
      
        <Router>
               
            <Switch>
              <Route path='/' exact ><Header/> <Home/></Route>
              <Route path='/checkout'><Header/> <Checkout/></Route>
              <Route path='/login'  component={Login}/>
              <Route path='/signup'  component={Signup}/>
              <Route path='/practice' component={Practice}/>
            </Switch>
        </Router>
    </div>
    </AppContext.Provider>
  );
}

export default App;
