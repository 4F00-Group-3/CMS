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

import Home from "./HomePage";
import Editor from "./editor/Editor";

class App extends Component {
  render() {
    return (
      <div>{
        <Home/>
      }</div>
    );
  }
}
export default App;
