import React, { useState } from 'react';
import './Login.css';
import {Link,useHistory} from 'react-router-dom';
import {auth} from './firebase';

const Login = () => {
    const history=useHistory();
    const [email,setEmail]=useState("");
    const [password,setpassword]=useState("");
    const signin=()=>{
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            history.push('/')
        }).catch(error=>alert(error.message));
    }
    const register=()=>{
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            if(auth){
                history.push('/');
            }
            console.log(auth);
        })
        .catch(error=>alert(error.message))
    }
    return (
        <div className='login__section'>
            <Link to='/'><img src='https://www.signsallsigns.com/wp-content/uploads/2019/03/amazon-logo-transparent.png' className='logo'/></Link>
            <div className='login__box'>
                <br/>
                <h2 align='left' className='login__label'>Sign in</h2><br/>
                <div className='login__email'>
                    <p className='login__label' >Email</p>
                    <input type='email' className='login__textarea' onChange={e=>setEmail(e.target.value)}/>
                </div>
                <br/>
                <div className='login__password'>
                    <div className='login__password_container'>
                        <span className='lf1'>Password</span><br/>
                        <Link className='lf2'>Forgot password</Link>    
                    </div>
                    <input type='password' className='login__textarea' onChange={e=>setpassword(e.target.value)}/>
                    
                </div>
                <div>
                    <button className='login__button' onClick={signin}>Sign in</button>
                </div>
                <p>By continuing, you agree to Amazon's trial CloneConditions of Use and Privacy Notice.</p>
                <div>
                
                  <button className='login__button_new' onClick={register}>I am a new customer</button> 
                </div>
                
            </div>
        </div>
    );
};

export default Login;