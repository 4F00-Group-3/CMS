import React, { Component } from "react";
import Home from '../HomePage';
import Editor from '../editor/Editor';
import Dashboard from '../dashboard/Dashboard'
import SitePage from '../Site Page/SitePage';
import Login from '../Login/LoginPage';
import CreateAccount from '../Login/CreateAccount';
import GetStarted from '../Components/getStarted';

class MasterTestMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewPage: ""
    };

    this.handleEditorClick = this.handleEditorClick.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleDashClick = this.handleDashClick.bind(this);
    this.handleSitePageClick = this.handleSitePageClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleCreateAccountClick = this.handleCreateAccountClick.bind(this);
    this.handleGetStartedClick = this.handleGetStartedClick.bind(this);
  }

  handler() {
    this.setState({ viewPage: "Dash" });
  }

  handleEditorClick() {
    this.setState({ viewPage: "Editor" });
  }

  handleHomeClick() {
    this.setState({ viewPage: "Home" });
  }

  handleDashClick() {
    this.setState({ viewPage: "Dash" });
  }

  handleLoginClick() {
    this.setState({ viewPage: "Login" });
  }

  handleCreateAccountClick() {
    this.setState({ viewPage: "Create Account" });
  }

  handleSitePageClick() {
    this.setState({ viewPage: "SitePage" });
  }

  handleGetStartedClick() {
    this.setState({ viewPage: "GetStarted" });
  }


  render() {
    const view = this.state.viewPage;
    let page;
    switch (view) {
      case "Editor":
        page = <Editor handleHomeClick={this.handleHomeClick}/>;
        break;
      case "Home":
        page = <Home />;
        break;
      case "Dash":
        page = <Dashboard handleHomeClick = {this.handleHomeClick}/>;
        break;
      case "Login":
        page = <Login handleSitePageClick = {this.handleSitePageClick}
                      handleCreateAccountClick={this.handleCreateAccountClick}
                      handleGetStartedClick = {this.handleGetStartedClick}
                      handleHomeClick={this.handleHomeClick}/>;
        break;
      case "Create Account":
        page = <CreateAccount handleSitePageClick = {this.handleSitePageClick}
                              handleGetStartedClick = {this.handleGetStartedClick}/>;
        break;
      case "SitePage":
        page = <SitePage handleHomeClick = {this.handleHomeClick}
                         handleDashClick = {this.handleDashClick}
                         handleGetStartedClick = {this.handleGetStartedClick}/>;
        break;
      case "GetStarted":
        page = <GetStarted handleSitePageClick = {this.handleSitePageClick}/>;
        break;
      default:
        page = <Home />;
    }
    return (
      <div>
        <div className="sticky-top">
          <button onClick={this.handleEditorClick}>Editor</button>
          <button onClick={this.handleHomeClick}>Home</button>
          <button onClick={this.handleDashClick}>Dash</button>
          <button onClick={this.handleLoginClick}>Login</button>
          <button onClick={this.handleCreateAccountClick}>Create Account</button>
          <button onClick={this.handleSitePageClick}>Site Page</button>
          <button onClick={this.handleGetStartedClick}>GetStart</button>
        </div>
        <div id="testingCanvas">
          {page}
        </div>
      </div>


    );
  }
}
export default MasterTestMenu;
