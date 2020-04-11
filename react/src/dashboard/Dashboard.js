import React, { Component } from "react";
import Pages from "./components/Pages";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import "../css/Dashboard.css";
import Users from "./components/Users";
import Settings from "./components/Settings";
import { Redirect, Router } from "react-router-dom";
import DashboardBackend from "./backend/DashboardBackend";
import UserAdminBackend from "./backend/UserAdminBackend";
import Home from '../HomePage';


let backend = new DashboardBackend();
let userAdminBackend = new UserAdminBackend();

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            page: <Pages backend={backend}/>,
        };
      if (sessionStorage.getItem('id') === null || sessionStorage.getItem('siteId') === null) {
        props.handleHomeClick();
      }
        //backend.returnAllPages();
    }

  onPush = buttonName => {
    console.log(buttonName);
    switch (buttonName) {
      case "Pages": {
        this.setState({ page: <Pages backend={backend} /> });
        break;
      }
      case "Users": {
        this.setState({ page: <Users backend={userAdminBackend} /> });
        break;
      }
      case "Settings": {
        this.setState({ page: <Settings /> });
        break;
      }
      case "Log Out": {
        sessionStorage.clear();
        this.props.handleHomeClick();
        break;
      }
      default: {
        break;
      }
    }
  };

  render() {
    return (
      <>
        <div>
          <TopBar />
          <div className="SideBySide">
            <SideBar onPush={this.onPush} />
            {this.state.page}
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
