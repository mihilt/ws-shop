import React from 'react';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout_item.component';

import { 
    selectCartItems, 
    selectCartTotal 
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className = 'checkout-page'>
        <div className = 'checkout-header'>
            <div className = 'header-block'>
                <span>제품</span>

            </div>
            <div className = 'header-block'>
                <span>설명</span>

            </div>
            <div className = 'header-block'>
                <span>갯수</span>

            </div>
            <div className = 'header-block'>
                <span>가격</span>

            </div>
            <div className = 'header-block'>
                <span>삭제</span>
            </div>
        </div>
        {cartItems.map(cartItem =>(
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            
        <div className = 'total'>
            <span>합계: {total}원</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
cartItems: selectCartItems,
total: selectCartTotal

})

export default connect(mapStateToProps)(CheckoutPage);