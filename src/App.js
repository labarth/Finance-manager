import React, { PureComponent } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './pages/MainPage';


class App extends PureComponent {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Link to={`/main`}> Main page</Link>
            <Route path="/main" component={MainPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
