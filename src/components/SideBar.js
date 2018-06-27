import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
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
  render() {
    return (
      <SideBarComponent>
        <div>
          <NavLink exact activeStyle={{ background: 'red' }} to="/">
            Main Page
          </NavLink>
        </div>
        <div>
          <NavLink activeStyle={{ background: 'red' }} to="/add">
            Add Expense Page
          </NavLink>
        </div>
      </SideBarComponent>
    );
  }
}

export default SideBar;
