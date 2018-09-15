import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './StyledButton';

class Button extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
  };

  static defaultProps = {
    onClick: Function.prototype,
    disabled: false,
  }

  render() {
    const { text, onClick, disabled } = this.props;

    return (
      <StyledButton
        onClick={onClick}
        disabled={disabled}
      >
        {text}
      </StyledButton>
    );
  }
}

export default Button;
