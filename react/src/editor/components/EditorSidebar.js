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
                <EditorButton text="Heading" faIcon={faFont} />
                <EditorButton text="Image" faIcon={faFileImage} />
                <EditorButton text="Button" faIcon={faAsterisk} />
                <EditorButton text="Dividers" faIcon={faBars} />
                <EditorButton text="Spacer" faIcon={faAlignRight} />
                <EditorButton text="Size" faIcon={faAsterisk} />
                <EditorButton text="Icon" faIcon={faArrowDown} />
                <EditorButton text="Video" faIcon={faCircle} />
            </div>
        );
    };
}


const sideBarContainerStyle = {
    marginLeft: (constants.SideBarWidthAsInt) + "vh",
    marginRight: (constants.SideBarWidthAsInt) + "vh",
    marginTop: "2vh",
    margin: "auto",
    width: "50vh",
    height: "100vh",
    background: "grey",
    border: "3px solid green",
    padding: "10px",
    float: "left",
};


export default EditorSideBar