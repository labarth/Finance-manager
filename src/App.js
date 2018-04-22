import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { authChanged } from 'redux/actions/authActions';
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

@connect(mapStateToProps, { authChanged })
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

  constructor(props) {
    super(props);
    this.props.authChanged(this.props.history);
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
