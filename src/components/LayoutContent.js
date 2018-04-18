import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LayoutContentComponent = styled.div`
  padding: 30px;
  width: 100%;
`;

class LayoutContent extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <LayoutContentComponent>
        {this.props.children}
      </LayoutContentComponent>
    );
  }
}

export default LayoutContent;
