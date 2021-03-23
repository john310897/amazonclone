import React, { useContext,useState } from 'react';
import './Checkout.css';
import DeleteIcon from '@material-ui/icons/Delete';
import AppContext from './AppContext';

const Checkout = () => {
    const {cartitems,iprice}=useContext(AppContext);
    
    
    const getTotal=()=>{
        
    }

    
    return (
        <div className='checkout__section'>
            <div className='checkout__header'>
                    <div className='checkout__headerbanner'>
                        <img src='https://www.poptelecom.co.uk/application/uploads/media/Amazon_Prime_Banner.png' className='checkout__image'/>
                    </div>
                    <div className='checkout__total'>
                            <span> total number of items: {cartitems.length}</span> 
                            <span> total price:$ {iprice}</span> 
                            <button className='checkout__button'>proceed to checkout</button>
                    </div>
            </div>

            <div className='checkout__item_list'>
                <div className='checkout_item'>

                    {
                        cartitems.map((items)=>
                        (
                            
                            <div className='checkout__items'>
                        <div className='checkout__item_image'>
                            <img src={items[1].img} className='checkout_img'/>
                        </div>
                        <div className='checkout__item_title'>
                            <p>{items[0].name}</p>
                            <strong>${items[2].price}</strong>
                            <div className='checkout__buttons'>
                                <button className='item_checkout__button'><DeleteIcon/></button>
                            </div>
                        </div>
                    </div>
                    
                        ))
                        
                    }
                        
                    
                </div>
                
            </div>
            
            
        </div>
        
    );
};
export default Checkout; 