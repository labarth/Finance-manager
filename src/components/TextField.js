import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const inputTypes = ['text', 'number', 'password', 'tel', 'search', 'email'];

export const TextFieldComponent = styled.input`
  min-width: 200px;
  min-height: 32px;
  border-radius: 4px;
  border: 1px solid #aebaca;
  outline: none;
  padding: 0 12px;
`;

class TextField extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(inputTypes).isRequired,
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
      <TextFieldComponent
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    );
  }
}

export default TextField;
