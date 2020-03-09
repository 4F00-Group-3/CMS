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
            <Footer size="mini">
              <FooterSection type="left" logo="NO.">
                <FooterLinkList>
                  <a href="#">Help</a>
                  <a href="#">Privacy & Terms</a>
                </FooterLinkList>
              </FooterSection>
            </Footer>
          </Content>
        </Layout>
      </div>
    );
  }
}
export default App;
