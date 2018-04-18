import React, { Component } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import { Route, withRouter } from 'react-router-dom';
import { authActions } from 'redux/actions/authActions';
import { connect } from 'react-redux';
import Page from 'components/Page';
import SignUpPage from 'pages/SignUpPage';
import SignInPage from 'pages/SignInPage';
import RootPage from 'pages/RootPage';
import 'configFirebase';
import 'components/injectGlobalStyledComponent';


const mapStateToProps = state => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => ({
  SING_REQUEST: () => dispatch(authActions.SING_REQUEST()),
  SING_IN_SUCCESS: data => dispatch(authActions.SING_IN_SUCCESS(data)),
  SING_ERROR: () => dispatch(authActions.SING_ERROR()),
});

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func,
    }).isRequired,
    user: PropTypes.shape({}),
    SING_REQUEST: PropTypes.func,
    SING_IN_SUCCESS: PropTypes.func,
    SING_ERROR: PropTypes.func,
  }

  static defaultProps = {
    user: {},
    SING_REQUEST: Function.prototype,
    SING_IN_SUCCESS: Function.prototype,
    SING_ERROR: Function.prototype,
  }

  componentDidMount() {
    const { SING_REQUEST, SING_IN_SUCCESS, SING_ERROR, history } = this.props;
    SING_REQUEST();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        SING_IN_SUCCESS(user);
        history.push('/home');
      } else {
        SING_ERROR();
        history.push('/signin');
      }
    });
  }

  render() {
    return (
      <Page>
        <Route path="/home" render={() => <RootPage user={this.props.user} />} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/signin" component={SignInPage} />
      </Page>
    );
  }
}

export default withRouter(App);
