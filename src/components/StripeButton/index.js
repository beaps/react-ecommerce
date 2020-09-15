import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function StripeCheckoutButton(props) {
  const { price } = props;
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HRfOaFABeYjGWlmcp3o2BljlEkjiuOMXVCJkrnSMdjhAhBuUyZscsEWxoY6uVNmYIbAeIfSp8FpwVfyjnT0q2In00oxJKjObC';

  function onToken(token) {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="Beaps Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://i.ibb.co/G3qKXLK/logo-beaps.png"
      description={`Your total is €${price}`}
      amount={priceForStripe}
      currency="EUR"
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
