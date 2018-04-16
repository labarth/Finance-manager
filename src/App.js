import React, { Component } from 'react';
import firebase from 'firebase';
import { Route, withRouter } from 'react-router-dom';
import Page from 'components/Page';
import MainPage from 'pages/MainPage';
import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInPage';
import './configFirebase';
import './components/injectGlobalStyledComponent';

class App extends Component {
  state = {
    user: null,
  };

  componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user }, () => {
          this.props.history.push('/home');
        });
      } else if (user === null) {
        this.props.history.push('/signin');
      }
    });
  }

  render() {
    return (
      <Page>
        <Route path="/home" render={() => <MainPage user={this.state.user} />} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
      </Page>
    );
  }
}

export default withRouter(App);
