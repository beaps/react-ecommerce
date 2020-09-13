import React from 'react';

import './styles.scss';

function CheckoutItem(props) {
  const { cartItem } = props;
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="checkout-item__image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="checkout-item__name">{name}</span>
      <span className="checkout-item__quantity">{quantity}</span>
      <span className="checkout-item__price">{price}</span>
      <button className="checkout-item__remove-button">&#10005;</button>
    </div>
  );
}

export default CheckoutItem;
