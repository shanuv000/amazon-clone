import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className='product'>
            <div className="product__info">
                <p>The lean Startup</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>199.99</strong>
                </p>
                <div className="product__rating">
                    <p>🌟</p>
                    <p>🌟</p>
                    <p>🌟</p>
                </div>
            </div>
            <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg"
                alt=""/>
            <button>Add to Basket</button>
        </div>
    )

}

export default Product;