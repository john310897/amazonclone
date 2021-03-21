import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Search } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link,BrowserRouter as Router, BrowserRouter} from 'react-router-dom';
import AppContext from './AppContext';
const Header = props => {
  const {value,setvalue,cartitems}=useContext(AppContext);
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
                  <div className='option'>
                    <span>hello guest</span>
                    <span>
                      <Link to='/login' className='link'>sign in</Link>
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