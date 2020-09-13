import React from 'react';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  addItem,
  removeItem
} from '../../redux/cart/cart.actions';

import './styles.scss';

function CheckoutItem(props) {
  const { cartItem, clearItem, addItem, removeItem } = props;
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="checkout-item__image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="checkout-item__name">{name}</span>
      <span className="checkout-item__quantity">
        <button
          className="checkout-item__quantity__arrow"
          onClick={() => {
            removeItem(cartItem);
          }}
        >
          &#10094;
        </button>
        <span className="checkout-item__quantity__value">{quantity}</span>
        <button
          className="checkout-item__quantity__arrow"
          onClick={() => {
            addItem(cartItem);
          }}
        >
          &#10095;
        </button>
      </span>
      <span className="checkout-item__price">{price}</span>
      <button
        className="checkout-item__remove-button"
        onClick={() => clearItem(cartItem)}
      >
        &#10005;
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
