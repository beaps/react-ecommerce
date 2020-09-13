import React from 'react';
import { connect } from 'react-redux';

import './styles.scss';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

function CartIcon({ toggleCartHidden }) {
  return (
    <button className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="cart-icon__icon" />
      <span className="cart-icon__count">0</span>
    </button>
  );
}

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
