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
import Home from './HomePage';
import Editor from './editor/Editor';

class App extends Component {
  render() {
    return (
      <div>
        <Editor/>
      </div>
    );
  }
}
export default App;
