import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonComponent = styled.button`
  font-size: 14px;
  line-height: 32px;
  width: 100%;
  background-color: dodgerblue;
  color: white;
  border-radius: 4px;
  border: none;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  text-transform: uppercase;
  letter-spacing: 1.3px;
  font-family: Verdana, sans-serif;
`;

class Button extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    const { text } = this.props;

    return (
      <ButtonComponent>{text}</ButtonComponent>
    );
  }
}

export default Button;
