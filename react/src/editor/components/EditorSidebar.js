import React, { Component } from 'react';
import * as constants from '../constants';
import '../../css/Editor.css'

import {
    faFont, 
    faFileImage,
    faBars,
    faArrowsAlt,
    faAlignLeft,
    faAlignRight,
    faAsterisk,
    faArrowDown,
    faCircle 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Button(props) {
    return (
        <button className="Editor-Sidebar-ButtonContainer"  onClick={sideBarButton_OnClick}>
            {/* style={buttonContainerStyle} */}
            <FontAwesomeIcon className="Editor-SideBar-Icon" icon={props.faIcon} />
            {/* style={sideBarIconStyle} */}
            <p style={sideBarTextStyle}>{props.text}</p>
        </button>
        );
}


function sideBarButton_OnClick(buttonName) {
    console.log(buttonName + " clicked");
}





class EditorSideBar extends Component {
    constructor(props){
        super(props);
        this.sideBarButton_OnClick.bind(this);
    }

    sideBarButton_OnClick() {
        console.log("clicked");
    }

    render() {


        return (
            <div className="Editor-SideBar-Container" >
                {/* style={sideBarContainerStyle} */}
                <Button text="Heading" faIcon={faFont}/>
                <Button text="Image" faIcon={faFileImage}/>
                <Button text="Button" faIcon={faAsterisk}/>
                <Button text="Dividers"  faIcon={faBars}/>
                <Button text="Align Right" faIcon={faAlignRight}/>
                <Button text="Increase Size" faIcon={faAsterisk}/>
                <Button text="Decrease Size" faIcon={faArrowDown}/>
                <Button text="Colour" faIcon={faCircle}/>
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


export default EditorSideBar