import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
    const [{basket, user}, dispatch] = useStateValue();

    return (<div className='checkout'>
            <div className="checkout__left">

                <img className='checkout__ad'
                     src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Events/Vday/FVOD/FVOD_400x39-SWM._CB659879429_.jpg"
                     alt=""/>
                <h3>Hello, {user?.email}</h3>
                <div className="checkout__title">
                    <h2>Your Shopping Basket</h2>

                    {basket.map(items => (
                        <CheckoutProduct
                            // key = {items.id=items.id+1}
                            id={items.id}
                            title={items.title}
                            image={items.image}
                            price={items.price}
                            rating={items.rating}/>
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>

        </div>
    )
}
export default Checkout;