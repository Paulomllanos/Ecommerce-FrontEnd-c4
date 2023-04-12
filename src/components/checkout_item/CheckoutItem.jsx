import React from 'react'
import { useContext } from 'react';
import CartContext from '../../context/cart/CartContext';
import "./CheckoutItem.scss"
const CheckoutItem = ({cartItem}) => {

   const {addItemToCart, removeItemToCart, clearItemToCart, cartCount} = useContext(CartContext)

   const {name, price, image, quantity, stock} = cartItem

   const clearHandler = () => clearItemToCart(cartItem)
   const addHandler = () => { if(cartCount < stock) addItemToCart(cartItem)}
   const removeHandler = () => removeItemToCart(cartItem)

   

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={image} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearHandler}>
        &#10005;
      </div>
    </div>
  )
}

export default CheckoutItem;