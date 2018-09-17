import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Record } from 'immutable';
import { getItems } from 'redux/actions/itemActions';
import CircularLoader from 'components/CircularLoader';
import { CostList } from 'components/CostList/List/CostList';

const mapStateToProps = (state) => ({
  costList: state.costList,
});

@connect(mapStateToProps, { getItemsAction: getItems })
class CostPage extends Component {
  static propTypes = {
    user: PropTypes.shape({
      uid: PropTypes.string,
    }).isRequired,
    getItemsAction: PropTypes.func.isRequired,
    costList: PropTypes.instanceOf(Record).isRequired,
  };

  componentDidMount() {
    const { user, getItemsAction } = this.props;
    if (user) {
      getItemsAction(user.uid);
    }
  }

  renderListItems = () => {
    const { costList: { list } } = this.props;

    return (
      list.size ? <CostList list={list} /> : <div>not items</div>
    );
  }

  render() {
    const { costList: { loading } } = this.props;

    return (
      loading ? <CircularLoader /> : this.renderListItems()
    );
  }
}

export default withRouter(CostPage);
