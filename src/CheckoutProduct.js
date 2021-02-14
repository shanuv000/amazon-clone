import React from 'react';
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider";

const CheckoutProduct = ({id, title, image, price, rating}) => {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        //Remove the item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="pro"/>

            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{title} </p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p key={i}>🌟</p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>

            </div>
            x
        </div>
    )
}
export default CheckoutProduct;