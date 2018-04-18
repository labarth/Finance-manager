import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LayoutComponent = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
`;

class Layout extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <LayoutComponent>
        {this.props.children}
      </LayoutComponent>
    );
  }
}

export default Layout;
