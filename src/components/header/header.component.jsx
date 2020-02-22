import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import Logo from '../../assets/LOGO.png';

import './header.styles.scss';

const Header = ({ currentUser }) => (
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
        currentUser ?
        <div className = 'option' onClick={()=>auth.signInWithCustomToken()}> 로그아웃 </div>
        :
        <Link className = 'option' to ='/signin'> 로그인 </Link>
      }
    </div>
  </div>
);

export default Header;