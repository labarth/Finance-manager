import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'configFirebase';
import 'components/GlobalStyled/injectGlobalStyledComponent';

import { authChanged } from 'redux/actions/authActions';

import Page from 'components/Page';
import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInPage';
import SideBar from 'components/SideBar';
import AddExpensePage from 'pages/AddExpensePage';
import MainPage from 'pages/MainPage';
import Layout from './components/Layout';

@connect(null, { authChangedAction: authChanged })
class App extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    authChangedAction: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { authChangedAction } = this.props;
    authChangedAction();
  }

  render() {
    return (
      <Page>
        <Layout>
          <Route exact path="/" component={SideBar} />
          <Route exact path="/add" component={SideBar} />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/add" component={AddExpensePage} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route component={() => <div>not found</div>} />
          </Switch>
        </Layout>
      </Page>
    );
  }
}

export default withRouter(App);
