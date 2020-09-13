import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './styles.scss';

import CustomButton from '../CustomButton';
import CartItem from '../CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';

function CartDropdown(props) {
  const { cartItems } = props;

  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
