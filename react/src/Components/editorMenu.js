import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import "./css.css";
import ImageEditor from "./ImageEditor";

class editorMenu extends Component {
  render() {
    return (
      <div className="Components-Editor">
        <p>HEEEEEY</p>
        <ImageEditor />
      </div>
    );
  }
}

export default editorMenu;
