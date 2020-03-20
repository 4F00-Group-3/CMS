import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import '../css/PageAdmin.css';

class SideBar extends Component {
  render() {
    return (
      <div className="SideNav">
        <Nav vertical className="bg-light justify-content-between">
          <NavItem >
            <button onClick={() => this.props.onPush("Pages")}>Pages</button>
          </NavItem>
          <NavItem>
            <button onClick={() => this.props.onPush("Users")}>Users</button>
          </NavItem>
          <NavItem>
            <button onClick={() => this.props.onPush("Settings")}>Settings</button>
          </NavItem>
          <NavItem>
            <button onClick={() => this.props.onPush("Log Out")}>Log Out</button>
          </NavItem>
        </Nav>
      </div>
    );
  }
}


export default SideBar;