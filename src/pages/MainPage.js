import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'components/Button';
import Title from 'components/Title';
import { signOut } from 'redux/actions/authActions';
import ViewExpense from '../components/ViewExpanse';
import CircularLoader from '../components/CircularLoader';

@connect(null, { signOut })
class MainPage extends Component {
  static propTypes = {
    user: PropTypes.shape({}),
    signOut: PropTypes.func.isRequired,
    categories: PropTypes.instanceOf(List()),
  };

  static defaultProps = {
    user: {},
    categories: List(),
  }

  handleSignOut = () => this.props.signOut();

  render() {
    const { user, categories } = this.props;

    return (
      <Fragment>
        <Title
          title="Main Page"
          color="Black"
        />
        {user ? <ViewExpense user={user} categories={categories} /> : <CircularLoader /> }
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
