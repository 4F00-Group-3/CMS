import React, { Component } from 'react';
import * as constants from '../constants';
import '../../css/Editor.css'

import {
    faFont,
    faFileImage,
    faBars,
    faAlignRight,
    faAsterisk,
    faArrowDown,
    faCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditorButton from '../components/EditorButton';
import Heading from './HeadingEditor'


function Button(props) {
    return (
        <button className="Editor-Sidebar-ButtonContainer"  onClick={sideBarButton_OnClick}>
            {/* style={buttonContainerStyle} */}
            <FontAwesomeIcon className="Editor-SideBar-Icon" icon={props.faIcon} />
            {/* style={sideBarIconStyle} */}
            <p>{props.text}</p>
        </button>
        );
}


function sideBarButton_OnClick(buttonName) {
    console.log(buttonName + " clicked");
}





class EditorSideBar extends Component {
    render() {
        return (
            <div className="Editor-SideBar-Container">
                {/* <EditorButton text="Heading" faIcon={faFont} onClick={this.props.onPush}/>
                <EditorButton text="Image" faIcon={faFileImage} onClick={this.props.onPush}/>
                <EditorButton text="Button" faIcon={faAsterisk} onClick={this.props.onPush}/>
                <EditorButton text="Dividers" faIcon={faBars} onClick={this.props.onPush}/>
                <EditorButton text="Spacer" faIcon={faAlignRight} onClick={this.props.onPush}/>
                <EditorButton text="Size" faIcon={faAsterisk} onClick={this.props.onPush}/>
                <EditorButton text="Icon" faIcon={faArrowDown} onClick={this.props.onPush}/>
                <EditorButton text="Video" faIcon={faCircle} onClick={this.props.onPush}/> */}
                <Heading/>
            </div>
        );
    };
}


const sideBarContainerStyle = {
    marginLeft: (constants.SideBarWidthAsInt) + "vh",
    marginRight: (constants.SideBarWidthAsInt) + "vh",
    marginTop: "2vh",
    margin: "auto",
    width: constants.EditorSideBarWidth,
    height: "100vh",
    background: "grey",
    border: "3px solid green",
    padding: "10px",
    float: "left",
    position: "fixed",
};


export default EditorSideBar