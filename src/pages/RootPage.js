import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route, withRouter } from 'react-router-dom';
import Layout from 'components/Layout';
import LayoutContent from 'components/LayoutContent';
import SideBar from 'components/SideBar';
import MainPage from 'pages/MainPage';
import AddExpensePage from 'pages/AddExpensePage';
import ViewExpensePage from './ViewExpensePage';


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
          <div>
            <NavLink to="/home/main">
              Main Page
            </NavLink>
          </div>
          <div>
            <NavLink to="/home/add">
              Add Expense Page
            </NavLink>
          </div>
          <div>
            <NavLink to="/home/view">
              View Expense Page
            </NavLink>
          </div>
        </SideBar>
        <LayoutContent>
          <Route exact path="/home/add" component={() => <AddExpensePage user={this.props.user} />} />
          <Route path="/home/main" render={() => <MainPage user={this.props.user} />} />
          <Route path="/home/view" component={() => <ViewExpensePage user={this.props.user} />} />
        </LayoutContent>
      </Layout>
    );
  }
}

export default withRouter(RootPage);
