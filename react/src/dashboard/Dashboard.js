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
import Editor from '../editor/Editor';

let backend = new DashboardBackend();
let userAdminBackend = new UserAdminBackend();

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: '',
      isEditing: false,
    };

    if (sessionStorage.getItem('id') === null || sessionStorage.getItem('siteId') === null) {
      props.handleHomeClick();
    }
  }

  componentDidMount = () => {
    backend.getPages(this);
  }

  returnToDash = () => {
    console.log('returning to dash')
    this.setState({
      page: <Pages
        loadEditor={this.loadEditor}
        backend={backend} />,
      isEditing: false
    });
  }

  loadEditor = (page) => {
    this.setState({
      page:
        <Editor
          page={page}
          returnToDash={this.returnToDash}
        />,
      isEditing: true,
    }
    )
  }

  onPush = buttonName => {
    console.log(buttonName);
    switch (buttonName) {
      case "Pages": {
        this.setState({
          page: <Pages
            loadEditor={this.loadEditor}
            backend={backend} />
        });
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
    if (this.state.isEditing) {
      return <>{this.state.page}</>
    }
    else {

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

}

export default Dashboard;
