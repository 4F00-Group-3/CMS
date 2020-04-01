//import React from "react";
import React, { Component, createRef } from "react";
import "./App.css";
import {
  Layout,
  Header,
  Content
} from "react-mdl";

import PlansPricing from './Components/landingPage';
import GetStarted from './Components/getStarted';
import LoginPage from "./Components/loginpage";
import LandingPage from "./Components/landingPage";
import CreateAccount from "./Components/createAccount";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <LandingPage />,
      activeButton: ""
    };

    this.scrollDiv = createRef();
  }

  /**
   * This method changes the active button on the navigation menu
   * based on what the user last clicked
   */
  returnButtonCSS = button => {
    if (button === this.state.activeButton) {
      return "btn btn-primary active";
    } else {
      return "btn btn-primary";
    }
  };


  /**
   * This method is for the "NO" icon on the navigation menu
   * this will redirect the user to the top of the landing page
   */
  logOn_OnClick = () => {
    this.setState({
      page: <LandingPage getStartedOnClick={this.getStarted_OnClick} />,
      activeButton: "landing"
    });
  };

  /**
   * This method is for the 'sign up' button on the nav menu
   * this will redirect the user to a craate account page
   */
  signUp_OnClick = () => {
    this.setState({
      page: <CreateAccount />,
      activeButton: ""
    });
  };

  /**
   * This method is for the 'Get Started' button on the nav menu
   * this will redirect the user to get started page
   */
  getStarted_OnClick = () => {
    this.setState({
      page: <GetStarted signUp_click={this.signUp_OnClick} />,
      activeButton: "get-started"
    });
  };

  /**
   * This method is for the 'Plans Pricing' button on the nav menu
   * this will redirect to user to plan & pricing section to the landing page
   */
  plansPricing_OnClick = () => {
    this.setState({
      page: <LandingPage getStartedOnClick={this.getStarted_OnClick}/>,
      activeButton: "plans-pricing"
    });
  };

  /**
   * This method is for the 'login' button on the nav menu
   * this will redirect the user to login
   */
  login_OnClick = () => {
    this.setState({
      page: <LoginPage />,
      activeButton: "log-in"
    });
  };

  /**
   * This method is for the 'FAQ' button on the nav menu
   * this will redirect the user to the FAQ section of the landing page
   */
  FAQ_OnClick = () => {
    this.setState({
      page: <LandingPage scrollDiv={this.scrollDiv} getStartedOnClick={this.getStarted_OnClick}/>,
      activeButton: "faq"
    });
    //this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' })
    //eventually scroll to component here,
    //for the sake of time I'm going to leave this
  };

  render() {
    return (
      <div>
        <Layout className="website-background">
          <Header transparent>
            <button onClick={this.logOn_OnClick} className="main-top-home-nav">
              <h4 style={{ color: "transparent" }}>NO</h4>
            </button>
            {/* <Navigation> */}
            <div>
              <button
                onClick={this.login_OnClick}
                className={this.returnButtonCSS("log-in")}
              >
                Log In
              </button>
              <button
                onClick={this.getStarted_OnClick}
                className={this.returnButtonCSS("get-started")}
              >
                Get Started
              </button>
              <a
                href="#planspricing"
                onClick={this.plansPricing_OnClick}
                className={this.returnButtonCSS("plans-pricing")}
              >
                Plans & Pricing
              </a>
              <a
                href="#faqsec"
                onClick={this.FAQ_OnClick}
                className={this.returnButtonCSS("faq")}
              >
                FAQ
              </a>
            </div>
            {/* </Navigation> */}
          </Header>
          <Content style={{scrollbarWidth: "none"}}>
            {/* <div className="page-content" /> */}
            {/* <Main /> */}
            {this.state.page}
          </Content>
        </Layout>
      </div>
    );
  }
}
export default HomePage;
