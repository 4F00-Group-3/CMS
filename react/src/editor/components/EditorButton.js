import React, { Component } from "react";
import * as constants from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EditorButton extends Component {
  render() {
    return (
      <button
        style={buttonContainerStyle}
        onClick={() => this.props.onClick(this.props.text)}
      >
        <FontAwesomeIcon icon={this.props.faIcon} style={sideBarIconStyle} />
        <p style={sideBarTextStyle}>{this.props.text}</p>
      </button>
    );
  }
}

const buttonContainerStyle = {
  height: "18%",
  width: constants.EditorSideBarButtonWidth,
  borderRadius: "20px",
  margin: "3%",
  color: "dark-grey",
  bottom: 0
};

const sideBarIconStyle = {
  height: "8vh",
  width: "7vh",
  color: "white"
};

const sideBarTextStyle = {};

export default EditorButton;
