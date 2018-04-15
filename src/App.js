import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Page from 'components/Page';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import './configFirebase';


const App = () => (
  <Router>
    <Page>
      <Route path="/main" component={MainPage} />
      <Route path="/signin" component={SignInPage} />
    </Page>
  </Router>
);

export default App;
