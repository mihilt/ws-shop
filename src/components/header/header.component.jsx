import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/LOGO.png';

import './header.styles.scss';

const Header = () => (
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
    </div>
  </div>
);

export default Header;