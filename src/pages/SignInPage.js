import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { signInWithGoogle, signOutWithGoogle } from 'redux/reducer/reducers/authWithGoogle';
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
  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  }

  handleSingInWithGoogle = () => signInWithGoogle();

  handleSignOut = () => signOutWithGoogle();


  render() {
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
              <Button text="Sing In" />
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
