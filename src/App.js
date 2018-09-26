import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import 'configFirebase';
import 'components/GlobalStyled/injectGlobalStyledComponent';

import { authChanged } from 'redux/actions/authActions';

import MainPage from 'pages/MainPage';
import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInPage';
import AddExpensePage from 'pages/AddExpensePage';
import SideBar from 'components/SideBar';
import Page from 'components/Page';
import Layout from 'components/Layout';
import CircularLoader from 'components/CircularLoader';


const mapStateToProps = (state) => ({
  auth: state.auth,
  list: state.costList,
  categories: state.categories,
});

@connect(mapStateToProps, { authChangedAction: authChanged })
class App extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    authChangedAction: PropTypes.func.isRequired,
    auth: PropTypes.shape({}),
    list: PropTypes.shape({}),
    categories: PropTypes.shape({}),
  }

  static defaultProps = {
    auth: {},
    list: {},
    categories: {},
  }

  componentWillMount() {
    const { authChangedAction } = this.props;
    authChangedAction();
  }

  render() {
    const { auth, list, categories } = this.props;
    const loading = auth.loading || list.loading || categories.loading;

    return (
      loading ? <CircularLoader /> :
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
