import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import Logo from '../../assets/LOGO.png';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
        <img src={Logo} alt="LOGO"/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        샵
      </OptionLink>
      <OptionLink to='/shop'>
        콘택트
      </OptionLink>
      {
        currentUser ? (
        <OptionLink as='div' onClick={()=>auth.signOut()}> 
         로그아웃 
        </OptionLink>
        ):(
        <OptionLink to ='/signin'> 
          로그인 
        </OptionLink>
        )}
        <CartIcon />
    </OptionsContainer>
    
      {hidden ? null : <CartDropdown />}
    
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden : selectCartHidden,
})

export default connect(mapStateToProps)(Header);