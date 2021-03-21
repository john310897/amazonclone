import React, { useContext } from 'react';
import AppContext from './AppContext';
import Header from './Header';
import './Home.css';
import Product from './Product';

const Home = () => {
    
    return (
        
        <div className='home_module'>
         
            {/* home banner */}
            <div className='home_banner'>
                <img src='https://cdn.cultofmac.com/wp-content/uploads/2016/07/Prime-Day-Banner.jpg' className='home_banner_img'/>
            </div>
            {/* home products */}
            <div className='home_products'>
                {/* product */}
                <Product name='
Apple iPad (10.2-inch, Wi-Fi, 32GB) - Space Grey (Latest Model, 8th Generation)' img='https://images-na.ssl-images-amazon.com/images/I/71ZXj1QEE0L._SL1500_.jpg' price='1000'/>
                <Product name="GINOYA BROTHERS - Women's Semi Georgette Embroidery Work Round Neck Long Formal Flowy Cocktail Gown" img='https://images-na.ssl-images-amazon.com/images/I/51dfaydM1aL._UL1157_.jpg' price='600'/>
                <Product name="Aahwan Women's Shift Midi Dress (126-Red-L_Dark Red_Large)" img='https://images-na.ssl-images-amazon.com/images/I/61m7Fngf%2BEL._UL1500_.jpg' price='500'/>

                {/* product */}
                {/* product */}
            </div>
            <div className='home_products'>
                <Product name='
Mi Notebook Horizon Edition 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop(8GB/512GB SSD/Windows 10/Nvidia MX350 2GB Graphics/Grey/1.35Kg)' img='https://images-na.ssl-images-amazon.com/images/I/712rw0zcH8L._SL1500_.jpg' price='40000'/>
                <Product name='Lenovo ThinkPad E14 Intel Core i5 10th Gen 14-inch Full HD IPS Thin and Light Laptop (8GB RAM/ 1TB HDD + 256GB SSD/ Windows 10 Home/ Microsoft Office Home...' img='https://images-na.ssl-images-amazon.com/images/I/71k3N4gxNeL._SL1486_.jpg' price='5000'/>
                <Product name='Lenovo ThinkPad T14 Intel Core i5 10th Gen 14-inch Full HD Laptop (16GB RAM/ 512GB SSD/ Windows 10 Pro/ Black/ 1.55 kg), 20S0S1MA00' img='https://images-na.ssl-images-amazon.com/images/I/51DJyXp-ACL._SL1060_.jpg' price='25000'/>

                {/* product */}
                {/* product */}
                {/* product */}
            </div>
            <div className='home_products'>
                <Product name='
Apple iPad Air (10.9-inch, Wi-Fi + Cellular, 64GB) - Silver (4th Generation Model)' img='https://images-na.ssl-images-amazon.com/images/I/71-mJuQew-L._SL1500_.jpg' price='25000'/>
                <Product name='Apple iPad Pro (11-inch, Wi-Fi, 256GB) - Space Grey (2nd Generation)' img='https://images-na.ssl-images-amazon.com/images/I/81p1L85KinL._SL1500_.jpg' price='4500'/>
            {/* product */}
            </div>
        </div>
    )
};

export default Home;