import React, { PureComponent } from 'react';
import TextField from 'components/TextField';

class SignInPage extends PureComponent {
  render() {
    return (
      <div>
        <TextField type="text" placeholder="Enter Login..." />
        <TextField type="password" placeholder="Enter password..." />
      </div>
    );
  }
}

export default SignInPage;
