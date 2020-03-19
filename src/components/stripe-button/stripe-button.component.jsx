import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price;
  const publishableKey = 'pk_test_51H1Cs8GKO0mTSNoEuLGC4k5YMWgoIzkfZAVXblFQRmP6HALeFe151l1jQXvzgzeXSrCFokROLleqUbtTtYQf5Xwb00O7qsEsrf';

  const onToken = token => {
    console.log(token);
    alert('결제 완료');
  };

  return (
    <StripeCheckout
      label='결제하기'
      name='WS-SHOP'
      billingAddress
      shippingAddress
      
      description={`합계: ￦${price}`}
      amount={priceForStripe}
      panelLabel='결제'
      token={onToken}
      stripeKey={publishableKey}
      currency = 'krw'
    />
  );
};

export default StripeCheckoutButton;