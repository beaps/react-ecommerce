import React from 'react';
import SignIn from '../../components/SignIn';
import SignUp from '../../components/SignUp';

import './styles.scss';

function SignInUp() {
  return (
    <div className="sign-in-up">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInUp;
