import React, { Component } from "react";
import * as constants from "../../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../../css/Editor.css'

class EditorButton extends Component {
  render() {
    return (
      <button
        className='sidebar-button'
        style={buttonContainerStyle}
        onClick={() => this.props.onClick(this.props.text)}
      >
        <FontAwesomeIcon icon={this.props.faIcon} className='sidebar-icon' />
        <p >{this.props.text}</p>
      </button>
    );
  }
}

const buttonContainerStyle = {
  width: constants.EditorSideBarButtonWidth,
};


export default EditorButton;
