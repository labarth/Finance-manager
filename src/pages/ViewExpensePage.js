import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ViewExpensePage extends PureComponent {
  static propTypes = {
    items: PropTypes.arrayOf(),
  };

  static defaultProps = {
    items: [],
  };

  render() {
    const { items } = this.props;
    return (
      items ?
        items.forEach(item => (
          <div>
            {item.data}
          </div>
        ))
        : <div>not items</div>
    );
  }
}

export default ViewExpensePage;
