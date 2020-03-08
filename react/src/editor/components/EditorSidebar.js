import React, { Component } from 'react';
import {
    faFont,
    faFileImage,
    faBars,
    faAlignRight,
    faAsterisk,
    faArrowDown,
    faCircle
} from "@fortawesome/free-solid-svg-icons";
import EditorButton from './EditorButton';
import * as constants from '../constants';

class EditorSideBar extends Component {
    render() {
        return (
            <div style={sideBarContainerStyle}>
                <EditorButton text="Heading" faIcon={faFont} onClick={this.props.onPush}/>
                <EditorButton text="Image" faIcon={faFileImage} onClick={this.props.onPush}/>
                <EditorButton text="Button" faIcon={faAsterisk} onClick={this.props.onPush}/>
                <EditorButton text="Dividers" faIcon={faBars} onClick={this.props.onPush}/>
                <EditorButton text="Spacer" faIcon={faAlignRight} onClick={this.props.onPush}/>
                <EditorButton text="Size" faIcon={faAsterisk} onClick={this.props.onPush}/>
                <EditorButton text="Icon" faIcon={faArrowDown} onClick={this.props.onPush}/>
                <EditorButton text="Video" faIcon={faCircle} onClick={this.props.onPush}/>
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
};


export default EditorSideBar