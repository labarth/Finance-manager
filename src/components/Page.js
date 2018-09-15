import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LayoutComponent = styled.section`
  height: 100%;
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
