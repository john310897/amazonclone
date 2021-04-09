import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from './Checkout';
import Signup from './Signup';
import Login from './Login';
import Practice from './Practice';
import {useContext, useEffect} from 'react';
import { AppContext } from './AppContext';
import { useState } from 'react';
import {auth} from './firebase';
function App() {
  let [value,setvalue]=useState(0);
  let [iprice,setiprice]=useState(0);
  let [cartitems,setcartitems]=useState([]);
  let [user,setuser]=useState();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('the user is', authUser.email);

      if(authUser){
        setuser(authUser.email)
      }

    })
  },[])

  return (
    <AppContext.Provider value={{value,setvalue,iprice,setiprice,cartitems,setcartitems,user,setuser}}>
    <div className="App">
        
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
