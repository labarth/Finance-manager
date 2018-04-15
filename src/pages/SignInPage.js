import React, { PureComponent } from 'react';
import firebase from 'firebase';
import * as EmailValidator from 'email-validator';
import styled from 'styled-components';
import { signInWithGoogle } from 'redux/reducer/reducers/authWithGoogle';
import TextField from 'components/TextField';
import Button from 'components/Button';
import Spacer from 'components/Spacer';

const WrapperComponent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
`;

const FormComponent = styled.div`
  width: 360px;
`;


class SignInPage extends PureComponent {
  state = {
    validEmail: false,
    validPassword: false,
    password: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        console.log(error);
      });
  }

  handleEmailValidate = () => {
    EmailValidator.validate(this.state.email)
      ?
      this.setState({ validEmail: true })
      :
      this.setState({ validEmail: false });
  }

  handlePasswordValidate = () => {
    (this.state.password.length >= 8)
      ?
      this.setState({ validPassword: true })
      :
      this.setState({ validPassword: false });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }, () => {
      this.handleEmailValidate();
      this.handlePasswordValidate();
    });
  }

  handleSingInWithGoogle = () => signInWithGoogle();

  render() {
    const { validEmail, validPassword } = this.state;
    const canSubmitForm = validEmail && validPassword;

    return (
      <WrapperComponent>
        <FormComponent>
          <form onSubmit={this.handleSubmit}>
            <Spacer>
              <TextField type="text" placeholder="Enter Login..." name="email" onChange={this.handleChange} />
            </Spacer>
            <Spacer>
              <TextField type="password" placeholder="Enter password..." name="password" onChange={this.handleChange} />
            </Spacer>
            <Spacer>
              <Button text="Sing Up" disabled={!canSubmitForm} />
            </Spacer>
          </form>
          <Spacer>
            <Button text="Sign In With Google" onClick={this.handleSingInWithGoogle} />
          </Spacer>
        </FormComponent>
      </WrapperComponent>
    );
  }
}

export default SignInPage;
