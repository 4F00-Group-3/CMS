//import React from "react";
import React, { Component, createRef } from "react";
import "./css/HomePage.css";
import {
  Layout,
  Header,
  Content
} from "react-mdl";
import GetStarted from './Components/getStarted';
import LoginPage from "./Login/LoginPage";
import LandingPage from "./Components/LandingPage";
import CreateAccount from "./Login/CreateAccount";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Dashboard from './dashboard/Dashboard'
import SitePage from './Site Page/SitePage';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <LandingPage login_OnClick={this.login_OnClick} />,
      activeButton: "landing"
    };

    this.scrollDiv = createRef();
  }

  /**
   * This method changes the active button on the navigation menu
   * based on what the user last clicked
   */
  returnButtonCSS = button => {
    if (button === 'faq' || button === 'plans-pricing' || button === 'landing') {
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
  homeButton_OnClick = () => {
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
      page: <LandingPage login_OnClick={this.login_OnClick} />,
      activeButton: "plans-pricing"
    });
  };

  /**
   * This method is for the 'login' button on the nav menu
   * this will redirect the user to login
   */
  login_OnClick = () => {
    this.setState({
      page: <LoginPage handleSitePageClick = {this.props.handleSitePageClick}
      handleCreateAccountClick={this.handleCreateAccountClick}
      handleGetStartedClick = {this.handleGetStartedClick}
      handleLandingClick={this.homeButton_OnClick}/>,
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

  handleCreateAccountClick = () => {
    this.setState({ page: <CreateAccount />, });
  }

  handleSitePageClick = () => {
    console.log('homepage js!');
    this.props.handleSitePageClick();
  }

  handleGetStartedClick = () => {
    this.setState({ page: <GetStarted handleSitePageClick = {this.props.handleSitePageClick}/> });
  }



  /**
   * This function returns the top navigation
   */
  TopNav() {
    return (
      <Header transparent>
        <Row className='topnav-row'>
          <Col>
            <a href='#landing' onClick={this.homeButton_OnClick} className="main-top-home-nav" />
          </Col>
          <Col style={{ textAlign: 'right' }}>
            <a
              href="#landing"
              onClick={this.plansPricing_OnClick}
              className={this.returnButtonCSS("landing")}
            >
              Home
            </a>


            <button
              onClick={this.login_OnClick}
              className={this.returnButtonCSS("log-in")}
            >
              Log In
            </button>

            {/* <button
              onClick={this.getStarted_OnClick}
              className={this.returnButtonCSS("get-started")}
            >
              Get Started
            </button> */}
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
