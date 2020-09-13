import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import './styles.scss';

import CustomButton from '../CustomButton';
import CartItem from '../CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';

function CartDropdown(props) {
  const { cartItems, history } = props;

  return (
    <div className="cart-dropdown">
      <div className="cart-dropdown__items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="cart-dropdown__items__empty-message">
            Your cart is empty
          </span>
        )}
      </div>
      <CustomButton onClick={() => history.push('/checkout')}>
        Go to checkout
      </CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
