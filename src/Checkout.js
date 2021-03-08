import React from 'react';
import './Checkout.css';
const Checkout = () => {
    return (
        <div className='checkout__module'>
            <div>
            <img src='https://www.poptelecom.co.uk/application/uploads/media/Amazon_Prime_Banner.png' className='checkout__image'/>
            
            </div>
            <div className='checkout__total'>
              <span> total number of items: 0</span> 
              <span> total price: 0</span> 
                <button className='checkout__button'>proceed to checkout</button>
            </div>
        </div>
    );
};
export default Checkout; 