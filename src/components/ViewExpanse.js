import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Record } from 'immutable';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getItems } from 'redux/actions/dbActions';
import styled from 'styled-components';

const ExpenseComponent = styled.div`
  position: relative;
  margin-bottom: 25px;
  padding-left: 8px;
`;

const IsIncomeComponent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 100%;
  background-color: ${(props) => (props.isIncome ? 'green' : 'red')};
`;

const mapStateToProps = (state) => ({
  db: state.db,
});

@connect(mapStateToProps, { getItemsAction: getItems })
class ViewExpense extends Component {
  static propTypes = {
    user: PropTypes.shape({
      uid: PropTypes.string,
    }),
    getItemsAction: PropTypes.func,
    db: PropTypes.instanceOf(Record),
  };

  static defaultProps = {
    user: {},
    getItemsAction: Function.prototype,
    db: Record(),
  };

  componentDidMount() {
    const { user, getItemsAction } = this.props;
    if (user) {
      getItemsAction(user.uid);
    }
  }

  render() {
    const { db: { items } } = this.props;

    return (
      items.size ?
        items.map((item) => (
          <ExpenseComponent key={item.id}>
            <div>{new Date(item.date).toLocaleDateString()}</div>
            <div>{`${item.price} BYN`}</div>
            <div>{item.description}</div>
            <IsIncomeComponent isIncome={item.isIncome} />
            <div>{item.category}</div>
          </ExpenseComponent>
        )) :
        <div>not items</div>
    );
  }
}

export default withRouter(ViewExpense);
