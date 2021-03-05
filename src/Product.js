import React from 'react';
import './Product.css';
const Product=()=>{
    return(
        <div className='product_detail'>
            <div className='product_details'>
                <span>Item title</span>
                <p className='product_price'>
                    <small>$</small>
                    <strong>40.00</strong>
                </p>
            </div>
                <img src='https://i.insider.com/511cffe5eab8ea1355000012?width=948' className='product_image'/>
                <button className='product_button'>Add to Cart</button>
        </div>
    )
}
export default Product;