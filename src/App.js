import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Checkout from './Checkout';
function App() {
  return (
    <div className="App">
        {/* header component */}
        
        {/* Routing component*/}
      
        <Router>
          <Header/>      
            <Switch>
              <Route path='/' exact component={Home}/>
              <Route path='/checkout'  component={Checkout}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
