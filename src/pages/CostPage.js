import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Record } from 'immutable';
import { CostList } from 'components/CostList/List/CostList';

const mapStateToProps = (state) => ({
  costList: state.costList,
});

@connect(mapStateToProps, null)
class CostPage extends Component {
  static propTypes = {
    user: PropTypes.shape({
      uid: PropTypes.string,
    }).isRequired,
    costList: PropTypes.instanceOf(Record).isRequired,
  };

  render() {
    const { costList: { list } } = this.props;

    return (
      list.size ? <CostList list={list} /> : <div>not items</div>
    );
  }
}

export default withRouter(CostPage);
