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
import HeadingEditorMenu from './EditorMenus/HeadingEditorMenu';
import ButtonEditorMenu from './EditorMenus/ButtonEditorMenu';
import EditDivider from './EditorMenus/EditDivider';
import IconEditorMenu from './EditorMenus/IconEditorMenu';
import ImageEditorMenu from './EditorMenus/ImageEditorMenu';
import VideoEditorMenu from './EditorMenus/VideoEditorMenu';
import EditMenuNav from './EditorMenus/EditorMenuNav';
import EditSpacer from './EditorMenus/SpacerEditorMenu'

class EditorSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          menu:this.props.menu
        };
    }

    returnMenu() {
        let menu = this.props.menu;
        switch (menu) {
            case "heading": {
                return <> <HeadingEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick}/> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete}/> </> 
            }
            case "divider": {
                return <> <EditDivider selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick}/><EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete}/> </>
            }
            case "image": {
                return <> <ImageEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick}/> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete}/> </> 
            }
            case "icon": {
                return <> <IconEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick}/> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete}/> </> 
            }
            case "video": {
                return <> <VideoEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick}/> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete}/> </> 
            }
            case "button": {
                return <> <ButtonEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick}/> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete}/> </> 
            }
            case "spacer": {
                return <> <EditSpacer selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick}/> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete}/> </> 
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