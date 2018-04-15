import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  font-size: 14px;
  line-height: 36px;
  background-color: dodgerblue;
  width: 100%;
  color: white;
  border-radius: 4px;
  border: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-family: Verdana, sans-serif;
  outline: none;
  padding: 0;
`;

class Button extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    onClick: Function.prototype,
  }

  render() {
    const { text, onClick } = this.props;

    return (
      <ButtonComponent onClick={onClick}>{text}</ButtonComponent>
    );
  }
}

export default Button;
