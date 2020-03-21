import React, { Component } from 'react';
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
import EditorButton from '../components/EditorButton';
import HeadingEditor from './HeadingEditor';


class EditorSideBar extends Component {

    returnMenu() {
        let menu = this.props.menu;
        switch (menu) {
            case "heading": {
                return <HeadingEditor />
            }
            default: {
                return <>
                    <EditorButton text="Heading" faIcon={faFont} onClick={this.props.onPush} />
                    <EditorButton text="Image" faIcon={faFileImage} onClick={this.props.onPush} />
                    <EditorButton text="Button" faIcon={faAsterisk} onClick={this.props.onPush} />
                    <EditorButton text="Dividers" faIcon={faBars} onClick={this.props.onPush} />
                    <EditorButton text="Spacer" faIcon={faAlignRight} onClick={this.props.onPush} />
                    <EditorButton text="Size" faIcon={faAsterisk} onClick={this.props.onPush} />
                    <EditorButton text="Icon" faIcon={faArrowDown} onClick={this.props.onPush} />
                    <EditorButton text="Video" faIcon={faCircle} onClick={this.props.onPush} />
                </>
            }
        }
    }

    render() {
        return (

            <div className="Editor-SideBar-Container">
            {/* editor menus to be tested here */}
                {this.returnMenu()}
            </div>
        );
    };
}


export default EditorSideBar