import { ChangeHistory } from '@material-ui/icons';
import React, { useContext } from 'react';
import AppContext from './AppContext';
import './Product.css';
const Product=({name,img,price})=>{
    let {value,setvalue,cartitems,setcartitems}=useContext(AppContext);
    

    const Change=()=>{
        console.log(cartitems);
        setvalue(value+1);
        const a=['name','img']
        setcartitems([...cartitems,
            [{name},{img},{price}]
        ]);
        // cartitems=[
        //     {name},
        //     {img},
        //     {price}
        // ]
        // setcartitems(...cartitems);
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