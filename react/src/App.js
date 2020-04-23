
import React, { Component } from "react";
import "./App.css";
import MasterTestMenu from './Testing Components/MasterTestMenu';
import Editor from './editor/Editor';
import Home from './HomePage';
import Dashboard from './dashboard/Dashboard'
import SitePage from './Site Page/SitePage';
import GetStarted from './Components/getStarted';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <Home
        handleHomeClick={this.handleHomeClick}
        handleSitePageClick={this.handleSitePageClick} />,
    };
  }

  handleSitePageClick = () => {
    this.setState({
      page: <SitePage handleHomeClick={this.handleHomeClick}
        handleDashClick={this.handleDashClick}
        handleGetStartedClick={this.handleGetStartedClick}
        handleSitePageClick={this.handleSitePageClick} />
    });
  }

  handleDashClick = () => {
    this.setState({
      page: <Dashboard
        handleSitePageClick={this.handleSitePageClick}
        handleHomeClick={this.handleHomeClick} />
    });
  }

  // handleGetStartedClick = () => {
  //   this.setState({ page: <GetStarted handleSitePageClick = {this.handleSitePageClick}/> });
  // }


  handleHomeClick = () => {
    this.setState({
      page: <Home
        handleHomeClick={this.handleHomeClick}
        handleSitePageClick={this.handleSitePageClick} />
    });
  }


  render() {
    return (
      <>{this.state.page}</>
    );
  }
}
export default App;