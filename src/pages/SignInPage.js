import React, { PureComponent } from 'react';
import firebase from 'firebase';
import { signInWithGoogle } from 'redux/reducer/reducers/authWithGoogle';
import TextField from 'components/TextField';
import Button from 'components/Button';
import Spacer from 'components/Spacer';


class SignInPage extends PureComponent {
  handleSubmit = (e) => {
    e.preventDefault();
    signInWithGoogle();
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Spacer>
          <TextField type="text" placeholder="Enter Login..." name="email" onChange={this.handleChange} />
        </Spacer>
        <Spacer>
          <TextField type="password" placeholder="Enter password..." name="password" onChange={this.handleChange} />
        </Spacer>
        <Spacer>
          <Button text="SignIn" />
        </Spacer>
      </form>
    );
  }
}

export default SignInPage;
