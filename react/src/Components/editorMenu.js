import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import {
  FooterSection,
  Footer,
  FooterLinkList,
  Layout,
  Drawer,
  Navigation,
  Content,
  Cell,
  Grid,
  Button
} from "react-mdl";
import "./css.css";
import ImageEditor from "./ImageEditor";

class editorMenu extends Component {
  render() {
    return (
      <div className="Components-Editor">
        <ImageEditor />
      </div>
    );
  }
}

export default editorMenu;
