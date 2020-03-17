import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
    selectCartItems,
    selectCartTotal
} from '../../redux/cart/cart.selectors';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer
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
        <TotalContainer>합계: {total}</TotalContainer>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);