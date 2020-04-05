//import React from "react";
import React, { Component, createRef } from "react";
import "./css/HomePage.css";
import {
  Layout,
  Header,
  Content
} from "react-mdl";

import PlansPricing from './Components/LandingPage';
import GetStarted from './Components/getStarted';
import LoginPage from "./Login/loginpage";
import LandingPage from "./Components/LandingPage";
import CreateAccount from "./Components/createAccount";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <LandingPage getStartedOnClick={this.getStarted_OnClick} />,
      activeButton: ""
    };

    this.scrollDiv = createRef();
  }

  /**
   * This method changes the active button on the navigation menu
   * based on what the user last clicked
   */
  returnButtonCSS = button => {
    console.log(button)
    if (button === 'faq' || button === 'plans-pricing') {
      if (button === this.state.activeButton) {
        return "a-btn button-primary active";
      } else {
        return "a-btn button-primary";
      }
    }
    else {
      if (button === this.state.activeButton) {
        return "button button-primary active";
      } else {
        return "button button-primary";
      }
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
      page: <LandingPage getStartedOnClick={this.getStarted_OnClick} />,
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
      page: <LandingPage scrollDiv={this.scrollDiv} getStartedOnClick={this.getStarted_OnClick} />,
      activeButton: "faq"
    });
  };

  /**
   * This function returns the top navigation
   */
  TopNav() {
    return (
      <Header transparent>
        <Row className='topnav-row'>
          <Col>
            <button onClick={this.logOn_OnClick} className="main-top-home-nav">
              {/* <h4 style={{ color: "transparent" }}>NO</h4> */}
            </button>
          </Col>
          <Col style={{ textAlign: 'right' }}>
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
          </Col>
        </Row>
      </Header>);
  }

  render() {
    return (
      <>
        <Layout fixedHeader className="website-background">
          {this.TopNav()}
          <Content style={{ scrollbarWidth: "none" }}>
            {this.state.page}
          </Content>
        </Layout>
      </>
    );
  }
}
export default HomePage;
