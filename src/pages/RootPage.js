import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Route, withRouter } from 'react-router-dom';
import Layout from 'components/Layout';
import LayoutContent from 'components/LayoutContent';
import SideBar from 'components/SideBar';
import MainPage from 'pages/MainPage';
import AddExpensePage from 'pages/AddExpensePage';


class RootPage extends Component {
  static propTypes = {
    user: PropTypes.shape({}),
  }

  static defaultProps = {
    user: {},
  }

  render() {
    return (
      <Layout>
        <SideBar>
          <Link to="/main">
            Main Page
          </Link>
          <Link to="/add">
            Add Expense Page
          </Link>
        </SideBar>
        <LayoutContent>
          <Route path="/" component={AddExpensePage} />
          <MainPage user={this.props.user} />
          <Route path="/main" render={() => <MainPage user={this.props.user} />} />
        </LayoutContent>
      </Layout>
    );
  }
}

export default withRouter(RootPage);
