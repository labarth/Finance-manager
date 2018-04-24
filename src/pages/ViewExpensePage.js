import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Record } from 'immutable';
import { connect } from 'react-redux';
import { getItems } from 'redux/actions/dbActions';

const mapStateToProps = state => ({
  db: state.db,
});

@connect(mapStateToProps, { getItemsAction: getItems })
class ViewExpensePage extends PureComponent {
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

  componentWillReceiveProps() {
    const { user, getItemsAction } = this.props;
    if (user) {
      getItemsAction(user.uid);
    }
  }

  render() {
    const { db: { items } } = this.props;

    return (
      items ?
        items.map(item => (
          <div key={item.id}>
            <div>{item.date}</div>
            <div>{item.price}</div>
            <div>{item.description}</div>
            <div>{item.isExpanse}</div>
          </div>
        )) :
        <div>not items</div>
    );
  }
}

export default ViewExpensePage;
