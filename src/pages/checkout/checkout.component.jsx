import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
    selectCartItems,
    selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
  } from './checkout.styles';

const CheckoutPage = ({ cartItems, total }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>제품</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>설명</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>갯수</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>가격</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>삭제</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <TotalContainer>합계: {total}원</TotalContainer>
        <WarningContainer>
      *TEST MODE*
      <br />
      TEST Card number : 4242 4242 4242 4242 
      <br/ >
      cvc : Any 3 digits
      <br/ >
      Date : Any future date 
    </WarningContainer>
    <StripeCheckoutButton price={total}/>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);