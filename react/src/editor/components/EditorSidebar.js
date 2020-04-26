import React, { Component } from 'react';
import '../../css/Editor.css'
import {
    faFont,
    faFileImage,
    faBars,
    faAlignRight,
    faAsterisk,
    faInfo,
    faCircle,
    faColumns
} from "@fortawesome/free-solid-svg-icons";
import EditorButton from '../components/EditorButton';
import HeadingEditorMenu from './EditorMenus/HeadingEditorMenu';
import ButtonEditorMenu from './EditorMenus/ButtonEditorMenu';
import EditDividerMenu from './EditorMenus/EditDividerMenu';
import IconEditorMenu from './EditorMenus/IconEditorMenu';
import ImageEditorMenu from './EditorMenus/ImageEditorMenu';
import VideoEditorMenu from './EditorMenus/VideoEditorMenu';
import EditMenuNav from './EditorMenus/EditorMenuNav';
import SpacerEditorMenu from './EditorMenus/SpacerEditorMenu';
import RowEditorMenu from './EditorMenus/RowEditorMenu';

/**
 * This class represents the menus of the user selected component, these menus are displayed inside the Editor
 */
export default class EditorSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: this.props.menu
        };
    }

    /**
    * This method adds appends a PageSection component in to the EditingPage
    * It does this by appending it to the page json (handled in the EditorBackend)
    * This new page object is re-rendered on to the EditingPage when setState is called
    * @param name the name of the component which is recieved from the the button clicked on EditorSidebar
    */
    AddElementToColumn = (name) => {
        this.props.onPush("Column", name, this.props.selectedId);
    }

    /**
     * This method returns the menus based on the menu properly 
     * it is used to dynamically render a menu to match the Page Section component which the user has clicked on.
     */
    returnMenu() {
        let menu = this.props.menu;
        switch (menu) {
            case "heading": {
                return (
                    <div className="inline">
                        <HeadingEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick} />
                        <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} />
                    </div>
                )
            }
            case "divider": {
                return (<div className="inline"> <EditDividerMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick} /><EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </div>)
            }
            case "image": {
                return (<div className="inline"> <ImageEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick} /> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </div>)
            }
            case "icon": {
                return (<div className="inline"> <IconEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick} /> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </div>)
            }
            case "video": {
                return (<div className="inline"> <VideoEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick} /> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </div>)
            }
            case "button": {
                return (<div className="inline"> <ButtonEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick} /> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </div>)
            }
            case "spacer": {
                return (<div className="inline"> <SpacerEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick} /> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </div>)
            }
            case "row": {
                return (
                    <div className="inline">
                        <h4 style={{color: "#FFF"}}>Add to Row</h4>
                        <RowEditorMenu
                            selectedId={this.props.selectedId}
                            selectedRowNumberOfColumns={this.props.selectedRowNumberOfColumns}
                            menuComponentOnClick={this.props.menuComponentOnClick}
                            handleBack={this.props.handleBack}
                            handleDelete={this.props.handleDelete}
                            onPush={this.props.onPush} />
                    </div>
                );
            }
            case "column": {
                return (
                    <>
                        <div className="editor-buttons-container">
                            <h4 style={{color: "#FFF"}}>Add to Column</h4>
                            <EditorButton text="Heading" faIcon={faFont} onClick={this.AddElementToColumn} />
                            <EditorButton text="Image" faIcon={faFileImage} onClick={this.AddElementToColumn} />
                            <EditorButton text="Button" faIcon={faAsterisk} onClick={this.AddElementToColumn} />
                            <EditorButton text="Dividers" faIcon={faBars} onClick={this.AddElementToColumn} />
                            <EditorButton text="Spacer" faIcon={faAlignRight} onClick={this.AddElementToColumn} />
                            <EditorButton text="Icon" faIcon={faInfo} onClick={this.AddElementToColumn} />
                            <EditorButton text="Video" faIcon={faCircle} onClick={this.AddElementToColumn} />
                            <EditMenuNav className="auto-bottom" handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} />
                        </div>
                    </>
                );
            }
            default: {
                return <>
                    <div className="editor-buttons-container">
                        <EditorButton text="Heading" faIcon={faFont} onClick={this.props.onPush} />
                        <EditorButton text="Image" faIcon={faFileImage} onClick={this.props.onPush} />
                        <EditorButton text="Button" faIcon={faAsterisk} onClick={this.props.onPush} />
                        <EditorButton text="Dividers" faIcon={faBars} onClick={this.props.onPush} />
                        <EditorButton text="Spacer" faIcon={faAlignRight} onClick={this.props.onPush} />
                        <EditorButton text="Row" faIcon={faColumns} onClick={this.props.onPush} />
                        <EditorButton text="Icon" faIcon={faInfo} onClick={this.props.onPush} />
                        <EditorButton text="Video" faIcon={faCircle} onClick={this.props.onPush} />
                    </div>
                </>
            }
        }
    }


    render() {
        return (
            <div className="Editor-SideBar-Container">
                {this.returnMenu()}
            </div>
        );
    };
}