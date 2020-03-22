//import React from "react";
import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import landingPage from "./Components/landingPage";
import getStarted from "./Components/getStarted";
import loginpage from "./Components/loginpage";
import { Link, Route } from "react-router-dom";
import Home from "./HomePage";
import Editor from "./editor/Editor";

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
              <Link to="/loginpage">Log In</Link>
              <Link to="/getstarted" style={{ fontWeight: "bold" }}>
                Get Started
              </Link>
              <a href="/#pl-pr">Plans & Pricing</a>
              <a href="/#faq-page">FAQ</a>
            </Navigation>
          </Header>
          <Content>
            <div className="page-content" />
            <Route exact path="/" component={landingPage} />
            <Route path="/loginpage" component={loginpage} />
            <Route path="/getStarted" component={getStarted} />
          </Content>
        </Layout>
      </div>
    );
  }
}
export default App;
{
  /* https://www.andreasreiterer.at/fix-browserrouter-on-apache/ -- ReactRouter help*/
}
