import React from 'react';
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

  handleSubmit = (event) => {
    event.preventdefault();
    this.setState({ email: '', password: '' });
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
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
