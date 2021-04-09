import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Search } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link,useHistory} from 'react-router-dom';
import AppContext from './AppContext';
import {auth} from './firebase';
const Header = props => {
  const history=useHistory();
  const {value,setvalue,cartitems,user,setuser}=useContext(AppContext);
  const handleAuth=()=>{
      if(user){
        auth.signOut();
        setuser('')
      }
      else{
        history.push('/login');
      }
  }
    return (
        <div className='header_section'>
          <Link to='/'>
            <img src='https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png' className='header_logo'/>
          </Link> 
             <div className='search'>
                 <input type='text' className='search'/>
                {/* logo */}
                <Search className='search_icon'/>
             </div>
             <div className='header_nav'>
                  <div className='option' onClick={handleAuth} >
                    <span>hello {user?user:"guest"}</span>
                    <span>
                      {user?"Sign out":"Sign in"}
                      </span>
                  </div>
                  <div className='option'>
                    <span>returns</span>
                  </div>
                  <div className='option'>
                        <Link to='/checkout' className='link'>
                            <ShoppingCartIcon/>
                            {cartitems.length}
                        </Link>
                  </div>
             </div>
         </div>
    ); 
};

export default Header;