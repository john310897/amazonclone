import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import { Search } from '@material-ui/icons';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link,BrowserRouter as Router, BrowserRouter} from 'react-router-dom';
const Header = props => {
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
                      <Link to='/login'>sign in</Link>
                      </span>
                  </div>
                  <div className='option'>
                    <span>returns</span>
                  </div>
                  <div className='option'>
                        <Link to='/checkout'>
                            <ShoppingCartIcon/>
                        </Link>
                  </div>
             </div>
         </div>
    ); 
};

export default Header;