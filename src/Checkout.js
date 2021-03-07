import React from 'react';
import PropTypes from 'prop-types';

const Checkout = () => {
    return (
        <div className='checkout__module'>
            <img src='https://www.poptelecom.co.uk/application/uploads/media/Amazon_Prime_Banner.png' className='checkout__image'/>
            <div className='checkout__total'>
                <span>total number of items :</span>
                <span>1</span><br/>
                <span>total amount :</span>
                <span>$1000</span>
            </div>
        </div>
    );
};


export default Checkout;