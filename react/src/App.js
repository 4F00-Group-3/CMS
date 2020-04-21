
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
      page: <Home handleSitePageClick={this.handleSitePageClick}/>,
    };
  }

  handleSitePageClick = () => {
    this.setState({ page:<SitePage handleHomeClick = {this.handleHomeClick}
                        handleDashClick = {this.handleDashClick}
                        handleGetStartedClick = {this.handleGetStartedClick}/>
    });
    console.log('app js!');
  }

  handleDashClick = () => {
    this.setState({ page: <Dashboard handleHomeClick = {this.handleHomeClick}/>});
  }

  // handleGetStartedClick = () => {
  //   this.setState({ page: <GetStarted handleSitePageClick = {this.handleSitePageClick}/> });
  // }

  
  handleHomeClick = () => {
    this.setState({ page: <Home handleSitePageClick={this.handleSitePageClick}/> });
  }


  render() {
    return (
       <>{this.state.page}</>
    );
  }
}
export default App;