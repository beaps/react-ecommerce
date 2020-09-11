import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';

function Header(props) {
  const { currentUser } = props;

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
        {currentUser ? (
          <Link
            to="/"
            className="options__option"
            onClick={() => auth.signOut()}
          >
            Sign Out
          </Link>
        ) : (
          <Link to="/signin" className="options__option">
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
