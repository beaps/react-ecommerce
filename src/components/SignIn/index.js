import React from 'react';

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
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>

        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            id="email"
            type="email"
            name="email"
            value={this.state.email}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            onChange={this.handleChange}
            id="password"
            type="password"
            name="password"
            value={this.state.password}
            required
          />
          <label htmlFor="password">Password</label>
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;
