import React from 'react';

import './styles.scss';

import CustomButton from '../CustomButton';

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__items"></div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
}

export default CartDropdown;
