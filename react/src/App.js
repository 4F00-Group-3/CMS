//import React from "react";
import React, { Component } from "react";
import "./App.css";
import { Layout, Content } from "react-mdl";
import landingPage from "./Components/landingPage";
import getStarted from "./Components/getStarted";
import loginpage from "./Components/loginpage";
import { Route, Switch, Redirect } from "react-router-dom";

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
          <Content>
            <div className="page-content" />
            <Route exact path="/" component={landingPage} />{" "}
            {/* exact path keeps page content from overlapping */}
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
