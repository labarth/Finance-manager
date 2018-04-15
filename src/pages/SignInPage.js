import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { connect } from 'react-redux';
import * as EmailValidator from 'email-validator';
import styled from 'styled-components';
import TextField from 'components/TextField';
import Button from 'components/Button';
import Spacer from 'components/Spacer';
import { signInWithGoogle } from 'redux/reducer/reducers/authWithGoogle';
import { authActions } from 'redux/reducer/reducers/authWithEmailAndPassword';

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

const mapDispatchToProps = dispatch => ({
  SING_UP_REQUEST: () => dispatch(authActions.SING_UP_REQUEST()),
  SING_UP_SUCCESS: data => dispatch(authActions.SING_UP_SUCCESS(data)),
  SING_UP_ERROR: data => dispatch(authActions.SING_UP_ERROR(data)),
});

const mapStateToProps = state => ({
  authWithEmailAndPassword: state.authWithEmailAndPassword,
});

@connect(mapStateToProps, mapDispatchToProps)
class SignInPage extends PureComponent {
  static propTypes = {
    SING_UP_REQUEST: PropTypes.func,
    SING_UP_SUCCESS: PropTypes.func,
    SING_UP_ERROR: PropTypes.func,
  }

  static defaultProps = {
    SING_UP_REQUEST: Function.prototype,
    SING_UP_SUCCESS: Function.prototype,
    SING_UP_ERROR: Function.prototype,
  }

  state = {
    validEmail: false,
    validPassword: false,
    password: '',
    email: '',
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { SING_UP_REQUEST, SING_UP_SUCCESS, SING_UP_ERROR } = this.props;

    SING_UP_REQUEST();

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        SING_UP_SUCCESS(user);
      })
      .catch((error) => {
        SING_UP_ERROR(error);
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
