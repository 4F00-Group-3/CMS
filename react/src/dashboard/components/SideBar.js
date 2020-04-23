import React, { Component } from "react";
import { Nav, NavItem } from "reactstrap";
import "../../css/Dashboard.css";

class SideBar extends Component {
  render() {
    return (
      <div className="SideNav">
        <Nav vertical className="dash-button-list justify-content-between">
          <NavItem>
            <button
              className="dashButtons"
              onClick={() => this.props.onPush("Pages")}
            >
              Pages
            </button>
          </NavItem>
          <NavItem>
            <button
              className="dashButtons"
              onClick={() => this.props.onPush("Users")}
            >
              Users
            </button>
          </NavItem>
          {/* <NavItem>
            <button
              className="dashButtons"
              onClick={() => this.props.onPush("Settings")}
            >
              Settings
            </button>
          </NavItem> */}
          {/* <NavItem>
            <button
              className="dashButtons"
              onClick={() => this.props.onPush("Log Out")}
            >
              Log Out
            </button>
          </NavItem> */}
        </Nav>
      </div>
    );
  }
}

export default SideBar;
