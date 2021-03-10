import React from 'react';
import './Signup.css';
const Signup = props => {
    return (
        <div className='signup__section'>
            <img src='https://www.signsallsigns.com/wp-content/uploads/2019/03/amazon-logo-transparent.png' className='logo'/>
            <div className='signup__box'>
                <div className='email_section'>
                <h2 className='createaccount'>Create account</h2>
                    <label>Email</label>
                    <input type='text' className='textarea'/>
                </div>
                <div className='password_section'>
                    <label>password</label>
                    <input type='password' className='textarea'/>
                    <label>Confirm password</label>
                    <input type='cpassword' className='textarea'/>
                </div>

                <button className='signup__button'>Create your Amazon account</button>

            </div>
        </div>
    );
};
export default Signup;