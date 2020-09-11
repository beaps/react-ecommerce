import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../CustomButton';
import FormInput from '../FormInput';

import './styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="sign-in__title">I already have an account</h2>
        <p className="sign-in__subtitle">
          Sign in with your email and password
        </p>

        <form className="sign-in__form" onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            id="email"
            type="email"
            name="email"
            value={this.state.email}
            required
            label="Email"
          />
          <FormInput
            handleChange={this.handleChange}
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            label="Password"
            required
          />
          <div className="sign-in__form__buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
