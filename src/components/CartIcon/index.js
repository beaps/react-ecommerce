import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

function CartIcon({ toggleCartHidden, itemCount }) {
  return (
    <button className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="cart-icon__icon" />
      <span className="cart-icon__count">{itemCount}</span>
    </button>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
  itemCount: state.cart.cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
