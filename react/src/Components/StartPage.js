//import React from "react";
import React, { Component } from "react";
import "../App";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./main";
import { Link } from "react-router-dom";

class StartPage extends Component {
  render() {
    return (
      <div style={{ height: "632px", position: "relative" }}>
        <Layout
          style={{
            background:
              "url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover"
          }}
        >
          <Header transparent title="NO." style={{ color: "white" }}>
            <Navigation>
              <Link to="/login">Log In</Link>
              <Link to="/getstarted" style={{ fontWeight: "bold" }}>
                Get Started
              </Link>
              <Link to="/plansandPricing">Plans & Pricing</Link>
              <Link to="/faq">FAQ</Link>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}
export default StartPage;
