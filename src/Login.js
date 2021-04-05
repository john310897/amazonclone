import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
const Login = props => {
    return (
        <div className='login__section'>
            <Link to='/'><img src='https://www.signsallsigns.com/wp-content/uploads/2019/03/amazon-logo-transparent.png' className='logo'/></Link>
            <div className='login__box'>
                <br/>
                <h2 align='left' className='login__label'>Sign in</h2><br/>
                <div className='login__email'>
                    <p className='login__label' >Email</p>
                    <input type='email' className='login__textarea'/>
                </div>
                <br/>
                <div className='login__password'>
                    <div className='login__password_container'>
                        <span className='lf1'>Password</span><br/>
                        <Link className='lf2'>Forgot password</Link>    
                    </div>
                    <input type='password' className='login__textarea'/>
                    
                </div>
                <div>
                
                    <button className='login__button'>Sign in</button>
                </div>
                <p>By continuing, you agree to Amazon's trial CloneConditions of Use and Privacy Notice.</p>
                <div>
                
                  <Link to='/signup'> <button className='login__button_new'>I am a new customer</button></Link> 
                </div>
                
            </div>
        </div>
    );
};

export default Login;