import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const inputTypes = ['text', 'number', 'password', 'tel', 'search', 'email'];

class TextField extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOfType(inputTypes).isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    placeholder: 'Enter value',
    onChange: Function.prototype,
  };

  render() {
    const { type, placeholder, onChange } = this.props;
    return (
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}

export default TextField;
