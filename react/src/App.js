//import React from "react";
import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import Main from "./Components/main";
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
            <Main />
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
