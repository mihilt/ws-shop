import React from 'react';

import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className = 'cart-dropdown'>
        <div className = 'cart-items' />
        <CustomButton>체크아웃</CustomButton>
    </div>
);

export default CartDropdown;