import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import Logo from '../../assets/LOGO.png';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
        <img src={Logo} alt="LOGO"/>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        샵
      </Link>
      <Link className='option' to='/shop'>
        콘택트
      </Link>
      {
        currentUser ? (
        <div className = 'option' onClick={()=>auth.signOut()}> 
         로그아웃 
        </div>
        ):(
        <Link className = 'option' to ='/signin'> 로그인 </Link>
        )}
        <CartIcon />
    </div>
    
      {hidden ? null : <CartDropdown />}
    
  </div>
);

const mapStateToProps = ({user: { currentUser}, cart: { hidden }}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);