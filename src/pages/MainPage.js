import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'components/Button/Button';
import Title from 'components/Title';
import { signOut } from 'redux/actions/authActions';
import ViewExpense from '../components/ViewExpanse';
import CircularLoader from '../components/CircularLoader';
import LayoutContent from '../components/LayoutContent';

@connect(null, { signOut })
class MainPage extends Component {
  static propTypes = {
    user: PropTypes.shape({}),
    signOut: PropTypes.func.isRequired,
    categories: PropTypes.instanceOf(List),
  };

  static defaultProps = {
    user: {},
    categories: List(),
  }

  handleSignOut = () => this.props.signOut();

  render() {
    const { user, categories } = this.props;

    return (
      <LayoutContent>
        <Title title="Main Page" color="Black" />
        {user ? <ViewExpense user={user} categories={categories} /> : <CircularLoader /> }
        <p> {user ? `Hello ${user.email}` : 'Hello ....'} </p>
        <Link
          to={{
            to: '/signin',
            pathname: '/signin',
          }}
        >
          <Button text="SignOut" onClick={this.handleSignOut} />
        </Link>
      </LayoutContent>
    );
  }
}

export default MainPage;
