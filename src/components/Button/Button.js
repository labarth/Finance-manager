import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './StyledButton';

export class Button extends PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    fullWidth: PropTypes.bool,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  };

  static defaultProps = {
    onClick: Function.prototype,
    disabled: false,
    fullWidth: false,
    backgroundColor: 'dodgerblue',
    color: 'white',
  }

  render() {
    const { text, onClick, disabled, fullWidth, backgroundColor, color } = this.props;

    return (
      <StyledButton
        onClick={onClick}
        disabled={disabled}
        fullWidth={fullWidth}
        backgroundColor={backgroundColor}
        color={color}
      >
        {text}
      </StyledButton>
    );
  }
}
