import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal";

const Checkout = () => {

    return <div className='checkout'>
        <div className="checkout__left">

            <img className='checkout__ad'
                 src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Events/Vday/FVOD/FVOD_400x39-SWM._CB659879429_.jpg"
                 alt=""/>
            <div className="checkout__title">
                <h2>Your Shopping Basket</h2>
                {/*<BasketItem/>*/}
                {/*{Basket Item}*/}
                {/*{Basket Item}*/}
                {/*{Basket Item}*/}
            </div>
        </div>

        <div className="checkout__right">
            <Subtotal/>
        </div>

    </div>

}
export default Checkout;