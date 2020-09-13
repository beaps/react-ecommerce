import React from 'react';

import './styles.scss';

function CartItem(props) {
  const { item } = props;
  const { imageUrl, price, name, quantity } = item;

  return (
    <div className="cart-item">
      <div className="cart-item__image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className="cart-item__details">
        <p className="cart-item__details__name">{name}</p>
        <p className="cart-item__details__price">
          {quantity} x {price}
        </p>
      </div>
    </div>
  );
}

export default CartItem;
