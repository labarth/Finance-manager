import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Record } from 'immutable';
import styled from 'styled-components';
import TextField from 'components/TextField';
import Button from 'components/Button';
import Spacer from 'components/Spacer';
import Title from 'components/Title';
import Modal from 'components/Modal';
import CircularLoader from 'components/CircularLoader';
import { signInWithGoogle } from 'redux/reducer/reducers/authWithGoogle';
import { authActions } from 'redux/actions/authActions';

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
  SING_REQUEST: () => dispatch(authActions.SING_REQUEST()),
  SING_IN_SUCCESS: data => dispatch(authActions.SING_IN_SUCCESS(data)),
  SING_ERROR: data => dispatch(authActions.SING_ERROR(data)),
});

const mapStateToProps = state => ({
  auth: state.auth,
});

@connect(mapStateToProps, mapDispatchToProps)
class SignInPage extends PureComponent {
  static propTypes = {
    SING_REQUEST: PropTypes.func,
    SING_IN_SUCCESS: PropTypes.func,
    SING_ERROR: PropTypes.func,
    auth: PropTypes.instanceOf(Record),
  }

  static defaultProps = {
    SING_REQUEST: Function.prototype,
    SING_IN_SUCCESS: Function.prototype,
    SING_ERROR: Function.prototype,
    auth: {},
  }

  state = {
    password: '',
    email: '',
    isModalOpen: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const { SING_REQUEST, SING_IN_SUCCESS, SING_ERROR } = this.props;

    SING_REQUEST();

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
        SING_IN_SUCCESS(user);
      })
      .catch((error) => {
        SING_ERROR(error);
        this.handleOpenModal();
      });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSingInWithGoogle = () => signInWithGoogle();

  handleOpenModal = () => this.setState({ isModalOpen: true });
  handleCloseModal = () => this.setState({ isModalOpen: false });

  render() {
    const { auth: { loading, error } } = this.props;
    const { isModalOpen } = this.state;

    return (
      <WrapperComponent>
        <FormComponent>
          <form onSubmit={this.handleSubmit}>
            <Spacer direction="horizontal">
              <Title title="Sign In" color="#fff" />
            </Spacer>
            <Spacer>
              <TextField type="text" placeholder="Enter Login..." name="email" onChange={this.handleChange} autoFocus />
            </Spacer>
            <Spacer>
              <TextField type="password" placeholder="Enter password..." name="password" onChange={this.handleChange} />
            </Spacer>
            <Spacer>
              <Button text="Sing In" disabled={loading} />
            </Spacer>
          </form>
          <Spacer>
            <Button text="Sign In With Google" onClick={this.handleSingInWithGoogle} />
          </Spacer>
          <Spacer>
            <Link to="/signUp">
              <Button text="Sign Up" />
            </Link>
          </Spacer>
        </FormComponent>
        { loading ? <CircularLoader /> : null }
        { isModalOpen ?
          <Modal onCloseModal={this.handleCloseModal}>{error.message}</Modal>
          : null
        }
      </WrapperComponent>
    );
  }
}

export default SignInPage;
