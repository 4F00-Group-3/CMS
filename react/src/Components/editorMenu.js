import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import "./css.css";
import ImageEditor from "./ImageEditor";
import { Content } from "react-mdl";

class editorMenu extends Component {
  render() {
    return (
      <div className="Components-Editor">
        <Content>
          <ImageEditor />
        </Content>
      </div>
    );
  }
}

export default editorMenu;
