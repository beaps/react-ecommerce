import React from 'react';

import './styles.scss';

function CustomButton(props) {
  const { children, isGoogleSignIn, ...otherProps } = props;
  return (
    <button
      className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
