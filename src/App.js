import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch } from 'react-router-dom';
import { authChanged } from 'redux/actions/authActions';
import { getCategories } from 'redux/actions/dbActions';
import { connect } from 'react-redux';
import Page from 'components/Page';
import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInPage';
import SideBar from 'components/SideBar';
import AddExpensePage from 'pages/AddExpensePage';
import MainPage from 'pages/MainPage';
import 'configFirebase';
import 'components/injectGlobalStyledComponent';

const mapStateToProps = state => ({
  user: state.auth.user,
});

@connect(mapStateToProps, { authChanged, getCategories })
class App extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    user: PropTypes.shape({}),
    authChanged: PropTypes.func.isRequired,
  }

  static defaultProps = {
    user: {},
  }

  componentDidMount() {
    this.props.authChanged(this.props.history);
  }

  render() {
    const { user } = this.props;

    return (
      <Page>
        <Route exact path="/" component={SideBar} />
        <Route exact path="/add" component={SideBar} />
        <Switch>
          <Route exact path="/" render={props => <MainPage {...props} user={user} />} />
          <Route exact path="/add" component={props => <AddExpensePage {...props} user={user} />} />
          <Route path="/signup" component={SignUpPage} />
          <Route path="/signin" component={SignInPage} />
          <Route component={() => <div>not found</div>} />
        </Switch>
      </Page>
    );
  }
}

export default withRouter(App);
