import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';

function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo-container__logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="options__option">
          Shop
        </Link>
        <Link to="/contact" className="options__option">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Header;
