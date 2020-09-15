import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './styles.scss';

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeButton';

function Checkout(props) {
  const { cartItems, total } = props;
  return (
    <div className="checkout">
      <div className="checkout__header">
        <div className="checkout__header__block">
          <span>Product</span>
        </div>
        <div className="checkout__header__block">
          <span>Description</span>
        </div>
        <div className="checkout__header__block">
          <span>Quantity</span>
        </div>
        <div className="checkout__header__block">
          <span>Price</span>
        </div>
        <div className="checkout__header__block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="checkout__total">
        <span>TOTAL: €{total}</span>
      </div>
      <StripeCheckoutButton price={total} />
      <div className="checkout__text-warning">
        <p>*Please use the following test credit card for payments*</p>
        <p>4242 4242 4242 4242 - *Exp: 09/20 - CVV: 123</p>
        <p>*Exp: current month / current year</p>
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
