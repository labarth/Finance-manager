import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route, withRouter } from 'react-router-dom';
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
          <NavLink to="/home/main">
            Main Page
          </NavLink>
          <NavLink to="/home/add">
            Add Expense Page
          </NavLink>
        </SideBar>
        <LayoutContent>
          <Route exact path="/home/add" component={AddExpensePage} />
          <Route path="/home/main" render={() => <MainPage user={this.props.user} />} />
        </LayoutContent>
      </Layout>
    );
  }
}

export default withRouter(RootPage);
