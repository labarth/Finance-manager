import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import Title from 'components/Title';
import { signOutWithGoogle } from 'redux/reducer/reducers/authWithGoogle';


class MainPage extends Component {
  static propTypes = {
    user: PropTypes.object,
  }

  static defaultProps = {
    user: {},
  }

  handleSignOut = () => {
    signOutWithGoogle();
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Title title="Main Page" color="Black" />
        <p>
          {`hello ${user.email}`}
        </p>
        <Link to="/signin">
          <Button text="SignOut" onClick={this.handleSignOut} />
        </Link>
      </div>
    );
  }
}

export default MainPage;
