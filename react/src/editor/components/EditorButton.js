import React, { Component } from 'react';
import * as constants from '../constants';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class EditorButton extends Component {
    constructor(props) {
        super(props);
        this.onClick.bind(this.onClick);
    }

    onClick = (props) => {
        console.log(props.text);
    }

    render() {
        return (
            <button style={buttonContainerStyle} onClick={() => this.onClick(this.props)}>
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