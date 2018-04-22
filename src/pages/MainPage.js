import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Layout from 'components/Layout';
import Button from 'components/Button';
import Title from 'components/Title';
import Page from 'components/Page'
import SideBar from 'components/SideBar'
import LayoutContent from 'components/LayoutContent'
import { signOut } from 'redux/actions/authActions';

@connect(null, { signOut })
class MainPage extends Component {
  static propTypes = {
    user: PropTypes.shape({}),
  }

  static defaultProps = {
    user: {},
  }

  handleSignOut = () =>  this.props.signOut();

  render() {
    const { user } = this.props;

    return (
      <Fragment>
        <Title
          title="Main Page"
          color="Black"
        />
        <p>
          {user ? `Hello ${user.email}` : 'Hello ....'}
        </p>
        <Link to="/signin">
          <Button
            text="SignOut"
            onClick={this.handleSignOut}
          />
        </Link>
      </Fragment>
    );
  }
}

export default MainPage;
