import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SideBarComponent = styled.aside`
  min-width: 320px;
  width: 320px;
  flex-shrink: 0;
  box-shadow: 1px 0 6px rgba(0,0,0,0.2);
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

class SideBar extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {};

  render() {
    return (
      <SideBarComponent>
        {this.props.children}
      </SideBarComponent>
    );
  }
}

export default SideBar;
