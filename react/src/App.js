//import React from "react";
import React, { Component } from "react";
import "./App.css";
import {
  Layout,
  Header,
  Navigation,
  Content,
  FooterSection,
  Footer,
  FooterLinkList
} from "react-mdl";
import Main from "./Components/main";
import StickyFooter from "react-sticky-footer";

class App extends Component {
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
            <Navigation>
              <a href="/loginpage">Log In</a>
              <a href="/getstarted" style={{ fontWeight: "bold" }}>
                Get Started
              </a>
              <a href="/#pl-pr">Plans & Pricing</a>
              <a href="/#faq-page">FAQ</a>
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
export default App;
