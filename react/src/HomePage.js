//import React from "react";
import React, { Component, createRef } from "react";
import "./App.css";
import {
  Layout,
  Header,
  Navigation,
  Content,
} from "react-mdl";
import PlansPricing from './Components/landingPage';
import GetStarted from './Components/getStarted';
import LoginPage from "./Components/LoginPage";
import LandingPage from "./Components/landingPage";


class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: <GetStarted />,
      activeButton: "get-started",
    }
    
    this.scrollDiv = createRef();
  }

  returnButtonCSS = (button) => {
    if (button === this.state.activeButton) {
      return "btn btn-primary active"
    }
    else {
      return "btn btn-primary"
    }
  }

  getStarted_OnClick = () => {
    this.setState({
      page: <GetStarted />,
      activeButton: "get-started",
    })

  }

  plansPricing_OnClick = () => {
    this.setState({
      page: <PlansPricing />,
      activeButton: "get-started",
    })
  }

  login_OnClick = () => {
    this.setState({
      page: <LoginPage />,
      activeButton: "log-in",
    })
  }

  FAQ_OnClick = () => {
    this.setState({
      page: <LandingPage scrollDiv={this.scrollDiv}/>,
      activeButton: "faq",
    })
    //this.scrollDiv.current.scrollIntoView({ behavior: 'smooth' })
    //eventually scroll to component here,
    //for the sake of time I'm going to leave this
  }

  render() {
    return (
      <div>
        <Layout
          style={{
            background:
              "url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover"
          }}
        >
          <Header transparent title="NO." style={{ color: "white" }}>
            {/* <Navigation> */}
            <button onClick={this.login_OnClick} className={this.returnButtonCSS("log-in")}>Log In</button>
            <button onClick={this.getStarted_OnClick} className={this.returnButtonCSS("get-started")}>
              Get Started
              </button>
            <button onClick={this.plansPricing_OnClick} className={this.returnButtonCSS("plans-pricing")}>Plans & Pricing</button>
            <button onClick={this.FAQ_OnClick} className={this.returnButtonCSS("faq")}>FAQ</button>
            {/* </Navigation> */}
          </Header>
          <Content>
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
