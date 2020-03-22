import React, { Component } from "react";
import Home from '../HomePage';
import Editor from '../editor/Editor';
import Dashboard from '../dashboard/Dashboard'
import Login from '../Components/loginpage';
import CreateAccount from '../Components/createAccount.js';

class MasterTestMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewPage: ""
    };

    this.handleEditorClick = this.handleEditorClick.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleDashClick = this.handleDashClick.bind(this);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleCreateAccountClick = this.handleCreateAccountClick.bind(this);
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


  render() {
    const view = this.state.viewPage;
    let page;
    switch (view) {
      case "Editor":
        page = <Editor />;
        break;
      case "Home":
        page = <Home />;
        break;
      case "Dash": {
        page = <Dashboard />;
        break;
      }
      case "Login": {
        page = <Login handleDashClick={this.handleDashClick}/>;
        break;
      }
      case "Create Account": {
        page = <CreateAccount />;
        break;
      }
      default:
        page = <Home />;
    }
    return (
      <div>
        <div>
          <button onClick={this.handleEditorClick}>Editor</button>
          <button onClick={this.handleHomeClick}>Home</button>
          <button onClick={this.handleDashClick}>Dash</button>
          <button onClick={this.handleLoginClick}>Login</button>
          <button onClick={this.handleCreateAccountClick}>Create Account</button>
        </div>
        <div id="testingCanvas">
          {page}
        </div>
      </div>


    );
  }
}
export default MasterTestMenu;
