import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LayoutComponent = styled.section`
  box-shadow: 0 4px 14px rgba(0,0,0, 0.1);
  margin: 0 auto;
  min-height: 100vh;
`;

class Page extends PureComponent {
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

export default Page;
