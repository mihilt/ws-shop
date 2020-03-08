import React from 'react';
import { connect } from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';

import ShoppingIcon from '../../assets/shopping-bag.png'

import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden}) => (
    <div className = 'cart-icon' onClick={toggleCartHidden}>
        <img src={ShoppingIcon} alt="ShoppingIcon"/>
        <span className = 'item-count'> 0 </span>
    
    </div>
);

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(
    null,
    mapDispatchToProps
    )(CartIcon);