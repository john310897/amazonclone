import React from 'react';
import './Product.css';
const Product=({name,img,price})=>{
    return(
        <div className='product_detail'>
            <div className='product_details'>
                <span className='title'>{name}</span>
                <p className='product_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
                <img src={img} className='product_image'/>
                <button className='product_button'>Add to Cart</button>
        </div>
    )
}
export default Product;