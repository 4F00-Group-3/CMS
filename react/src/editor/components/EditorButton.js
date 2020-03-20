import React, { Component } from 'react';
import * as constants from '../../constants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EditorButton extends Component {
    render() {
        return (
            <button style={buttonContainerStyle} onClick={() => this.props.onClick(this.props.text)}>
                <FontAwesomeIcon icon={this.props.faIcon} style={sideBarIconStyle} />
                <p style={sideBarTextStyle}>{this.props.text}</p>
            </button>
        );
    }
}




const buttonContainerStyle = {
    height: "20%",
    width: constants.EditorSideBarButtonWidth,
    borderRadius: "16px",
    margin: "5%",

}


const sideBarIconStyle = {
    height: "7vh",
    width: "7vh",

}

const sideBarTextStyle = {

}

export default EditorButton;