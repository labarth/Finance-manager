import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const inputTypes = ['text', 'number', 'password', 'tel', 'search', 'email'];

export const TextFieldComponent = styled.input`
  min-width: 200px;
  min-height: 36px;
  border-radius: 4px; 
  outline: none;
  padding: 0 12px;
  width: 100%;
  border: none;
  box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
  
  &:focus {
    box-shadow: inset 0px 2px 4px 0px rgba(0,0,0,0.2);
  }
`;

class TextField extends PureComponent {
  static propTypes = {
    type: PropTypes.oneOf(inputTypes).isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    autoFocus: PropTypes.bool,
  };

  static defaultProps = {
    placeholder: 'Enter value',
    onChange: Function.prototype,
    name: '',
    autoFocus: false,
  };

  render() {
    const { type, placeholder, onChange, name, autoFocus } = this.props;
    return (
      <TextFieldComponent
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        autoFocus={autoFocus}
      />
    );
  }
}

export default TextField;
