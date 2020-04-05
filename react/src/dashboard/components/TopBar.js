import React, { Component } from "react";
import "../../css/PageAdmin.css";
import { Navbar, NavbarBrand} from "reactstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import Settings from "./Settings";
import GetStarted from '../../Components/getStarted';
import AccountSettings from '../../Site Page/AccountSettings';

class TopBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navCollapsed: true,
      showNavbar: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  loadAccountSettings=()=> {
    // this.setState({this.props.testing});
    console.log(this.props.state);
  }
  render() {
    return (
      <div>
        <Navbar
          className="bg-light justify-content-between TopBar"
          sticky="top"
          color="light"
          light
          expand="md"
        >
          <NavbarBrand href="#">
            {/**this has to be here so icon is right aligned**/}
          </NavbarBrand>

          {/* <NavbarBrand href="#"> */} 
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {/* testing */}
              <i className="fa fa-address-book TopBar-Icon" ></i>
            </Dropdown.Toggle>

            <Dropdown.Menu alignRight="true">
              <Dropdown.Item href="#" onClick={() => this.props.NavToAccountSettings("Users")}>
                My Profile
              </Dropdown.Item>
              <Dropdown.Item href="#">
                Help
              </Dropdown.Item>
              {/* put in log out functionality below */}
              <Dropdown.Item href="#">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
            
          {/* </NavbarBrand> */}
        </Navbar>
      </div>
    );
  }
}

export default TopBar;
