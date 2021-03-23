import { ChangeHistory } from '@material-ui/icons';
import React, { useContext } from 'react';
import AppContext from './AppContext';
import './Product.css';
const Product=({name,img,price})=>{
    let p=price;
    let {value,setvalue,iprice,setiprice,cartitems,setcartitems}=useContext(AppContext);
    

    const Change=()=>{
        console.log(cartitems);
        setvalue(value+1);
        let j=parseInt(iprice);
        let k=parseInt(price);
        setiprice(j+k);
        setcartitems([...cartitems,
            [{name},{img},{price}]
        ]);
        
        console.log(cartitems);
    }
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
            
                <button className='product_button' onClick={Change}>Add to Cart</button>
        </div>
    )
}
export default Product;