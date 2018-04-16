import React, { Component } from 'react';
import firebase from 'firebase';
import { Route, Switch, withRouter, BrowserRouter as Router } from 'react-router-dom';
import Page from 'components/Page';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import './configFirebase';
import './components/injectGlobalStyledComponent';


class App extends Component {
  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) this.props.history.push('/home');
    });
  }

  render() {
    return (
      <Router>
        <Page>
          <Switch>
            <Route path="/home" component={MainPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/signin" component={SignInPage} />
          </Switch>
        </Page>
      </Router>
    );
  }
}

export default withRouter(App);
