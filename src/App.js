import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';


const App = () => (
  <Router>
    <div>
      <Link to="/main"> Main page</Link>
      <Link to="/signin"> SignInPage</Link>
      <Route path="/main" component={MainPage} />
      <Route path="/signin" component={SignInPage} />
    </div>
  </Router>
);

export default App;
