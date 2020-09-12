import React from 'react';

import './styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

function CartIcon() {
  return (
    <button className="cart-icon">
      <ShoppingIcon className="cart-icon__icon" />
      <span className="cart-icon__count">0</span>
    </button>
  );
}

export default CartIcon;
