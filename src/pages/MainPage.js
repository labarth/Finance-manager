import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from 'redux/actions/authActions';

import { Button } from 'components/Button/Button';
import { CostList } from 'components/CostList/List/CostList';
import Title from 'components/Title';
import CostPage from 'pages/CostPage';
import CircularLoader from 'components/CircularLoader';
import LayoutContent from 'components/LayoutContent';

@connect(null, { signOut })
class MainPage extends Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
  };

  handleSignOut = () => this.props.signOut();

  render() {
    return (
      <LayoutContent>
        <CostPage />
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
