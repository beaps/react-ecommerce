import React from 'react';

import './styles.scss';

function CustomButton(props) {
  const { children, isGoogleSignIn, inverted, ...otherProps } = props;
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''} ${
        inverted ? 'inverted' : ''
      }`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
