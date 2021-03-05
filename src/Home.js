import React from 'react';
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
                <Product/>
                <Product/>
                <Product/>

                {/* product */}
                {/* product */}
            </div>
            <div className='home_products'>
                <Product/>
                <Product/>
                <Product/>

                {/* product */}
                {/* product */}
                {/* product */}
            </div>
            <div className='home_products'>
                <Product/>
                <Product/>
            {/* product */}
            </div>
        </div>
    )
};

export default Home;