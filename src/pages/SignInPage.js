import React, { PureComponent } from 'react';
import TextField from 'components/TextField';
import Button from 'components/Button';
import Spacer from 'components/Spacer';


class SignInPage extends PureComponent {
  render() {
    return (
      <div>
        <Spacer>
          <TextField type="text" placeholder="Enter Login..." />
        </Spacer>
        <Spacer>
          <TextField type="password" placeholder="Enter password..." />
        </Spacer>
        <Spacer>
          <Button text="SignIn" />
        </Spacer>
      </div>
    );
  }
}

export default SignInPage;
