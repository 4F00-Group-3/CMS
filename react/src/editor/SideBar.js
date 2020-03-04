import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const SideBar = (props) => {
  return (
    <div style={SideNavStyle}>
      <Nav vertical className="bg-light justify-content-between">
        <NavItem >
          <NavLink href="#">Pages</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Users</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Settings</NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem> */}
      </Nav>
    </div>
  );
}

const SideNavStyle = {
  width: "25vh",
  height: "90vh",
  background: "lightgrey",
}


export default SideBar;