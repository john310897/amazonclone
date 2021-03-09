import React from 'react';
import './Checkout.css';
import DeleteIcon from '@material-ui/icons/Delete';
const Checkout = () => {
    return (
        <div className='checkout__section'>
            <div className='checkout__header'>
                    <div className='checkout__headerbanner'>
                        <img src='https://www.poptelecom.co.uk/application/uploads/media/Amazon_Prime_Banner.png' className='checkout__image'/>
                    </div>
                    <div className='checkout__total'>
                            <span> total number of items: 0</span> 
                            <span> total price: 0</span> 
                            <button className='checkout__button'>proceed to checkout</button>
                    </div>
            </div>

            <div className='checkout__item_list'>
                <div className='checkout_item'>
                        <div className='checkout__items'>
                        <div className='checkout__item_image'>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/71ZXj1QEE0L._SL1500_.jpg' className='checkout_img'/>
                        </div>
                        <div className='checkout__item_title'>
                            <p>GINOYA BROTHERS - Women's Semi Georgette Embroidery Work Round Neck Long Formal Flowy Cocktail Gown

                            GINOYA BROTHERS - Women's Semi Georgette Embroidery Work Round Neck Long Formal Flowy Cocktail Gown
                            GINOYA BROTHERS - Women's Semi Georgette Embroidery Work Round Neck Long Formal Flowy Cocktail Gown
                            </p>
                            <div className='checkout__buttons'>
                                <button className='item_checkout__button'><DeleteIcon/></button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                {/* item 2 */}
                <div className='checkout_item'>
                        <div className='checkout__items'>
                        <div className='checkout__item_image'>
                            <img src='https://images-na.ssl-images-amazon.com/images/I/71ZXj1QEE0L._SL1500_.jpg' className='checkout_img'/>
                        </div>
                        <div className='checkout__item_title'>
                            <p>GINOYA BROTHERS - Women's Semi Georgette Embroidery Work Round Neck Long Formal Flowy Cocktail Gown

                            GINOYA BROTHERS - Women's Semi Georgette Embroidery Work Round Neck Long Formal Flowy Cocktail Gown
                            GINOYA BROTHERS - Women's Semi Georgette Embroidery Work Round Neck Long Formal Flowy Cocktail Gown
                            </p>
                            <div className='checkout__buttons'>
                                <button className='item_checkout__button'><DeleteIcon/></button>       
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            
        </div>
        
    );
};
export default Checkout; 