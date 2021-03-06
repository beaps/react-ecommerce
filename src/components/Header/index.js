import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './styles.scss';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

function Header(props) {
  const { currentUser, hidden } = props;

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
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
}

// state -> root reducer
const mapStateToProp = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

// The connect() function connects a React component to a Redux store.
export default connect(mapStateToProp)(Header);
