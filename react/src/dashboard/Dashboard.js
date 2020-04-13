import React, { Component } from "react";
import Pages from "./components/Pages";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import "../css/PageAdmin.css";
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
            usersLoaded: false,
            pagesLoaded: false,
        };
      if (sessionStorage.getItem('id') === null || sessionStorage.getItem('siteId') === null) {
        props.handleHomeClick();
      }
      this.userLoaded = this.userLoaded.bind(this);
      this.isUserLoaded = this.isUserLoaded.bind(this);
        //backend.returnAllPages();
    }

    isPageLoaded() {
      return this.state.pagesLoaded;
    }

    isUserLoaded() {
      return this.state.usersLoaded;
    }

    

    userLoaded () {
      this.setState({
        usersLoaded: true,
      })
    }

  onPush = buttonName => {
    console.log(buttonName);
    switch (buttonName) {
      case "Pages": {
        this.setState({ page: <Pages backend={backend} /> });
        break;
      }
      case "Users": {
        this.setState({ page: <Users backend={userAdminBackend} 
                                     userLoaded = {this.userLoaded}
                                     isUserLoaded = {this.state.usersLoaded}/> });
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
