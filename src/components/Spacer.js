import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const directionTypes = ['left', 'right', 'top', 'bottom', 'vertical', 'horizontal', 'all'];

const SpacerComponent = styled.div`
  padding-top:    ${(props) => (props.indent && (props.direction === 'all' || props.direction === 'top' || props.direction === 'vertical') ? `${props.size}px` : null)};
  padding-right:  ${(props) => (props.indent && (props.direction === 'all' || props.direction === 'right' || props.direction === 'horizontal') ? `${props.size}px` : null)};
  padding-bottom: ${(props) => (props.indent && (props.direction === 'all' || props.direction === 'bottom' || props.direction === 'vertical') ? `${props.size}px` : null)};
  padding-left:   ${(props) => (props.indent && (props.direction === 'all' || props.direction === 'left' || props.direction === 'horizontal') ? `${props.size}px` : null)};
  margin-top:     ${(props) => (!props.indent && (props.direction === 'all' || props.direction === 'top' || props.direction === 'vertical') ? `${props.size}px` : null)};
  margin-right:   ${(props) => (!props.indent && (props.direction === 'all' || props.direction === 'right' || props.direction === 'horizontal') ? `${props.size}px` : null)};
  margin-bottom:  ${(props) => (!props.indent && (props.direction === 'all' || props.direction === 'bottom' || props.direction === 'vertical') ? `${props.size}px` : null)};
  margin-left:    ${(props) => (!props.indent && (props.direction === 'all' || props.direction === 'left' || props.direction === 'horizontal') ? `${props.size}px` : null)};
`;

class Spacer extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    indent: PropTypes.bool,
    size: PropTypes.number,
    direction: PropTypes.oneOf(directionTypes),
  };

  static defaultProps = {
    indent: true,
    size: 10,
    direction: 'all',
  };

  render() {
    const { children, size, indent, direction } = this.props;
    return (
      <SpacerComponent size={size} indent={indent} direction={direction}>
        {children}
      </SpacerComponent>
    );
  }
}

export default Spacer;
