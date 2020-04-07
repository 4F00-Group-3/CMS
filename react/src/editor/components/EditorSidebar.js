import React, { Component } from 'react';
import '../../css/Editor.css'
import {
    faFont,
    faFileImage,
    faBars,
    faAlignRight,
    faAsterisk,
    faArrowDown,
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

class EditorSideBar extends Component {
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
    * @param the name of the component which is recieved from the the button clicked on EditorSidebar
    */
    AddElementToColumn = (name) => {
        console.log("Editor sidebar column", this.props.selectedId)
        this.props.onPush("Column", name, this.props.selectedId);
    }

    returnMenu() {
        let menu = this.props.menu;
        console.log("EditorSidebar menu", menu)
        switch (menu) {
            case "heading": {
                return <> <HeadingEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick} /> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </>
            }
            case "divider": {
                return <> <EditDividerMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick} /><EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </>
            }
            case "image": {
                return <> <ImageEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick} /> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </>
            }
            case "icon": {
                return <> <IconEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick} /> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </>
            }
            case "video": {
                return <> <VideoEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick} /> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </>
            }
            case "button": {
                return <> <ButtonEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick} /> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </>
            }
            case "spacer": {
                return <> <SpacerEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.props.menuComponentOnClick} /> <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </>
            }
            case "row": {
                return <RowEditorMenu selectedId={this.props.selectedId} selectedRowNumberOfColumns={this.props.selectedRowNumberOfColumns} menuComponentOnClick={this.props.menuComponentOnClick} handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} onPush={this.props.onPush} />;
            }
            case "column": {
                return (
                    <>
                        <div className="editor-buttons-container">
                            <EditorButton text="Heading" faIcon={faFont} onClick={this.AddElementToColumn} />
                            <EditorButton text="Image" faIcon={faFileImage} onClick={this.AddElementToColumn} />
                            <EditorButton text="Button" faIcon={faAsterisk} onClick={this.AddElementToColumn} />
                            <EditorButton text="Dividers" faIcon={faBars} onClick={this.AddElementToColumn} />
                            <EditorButton text="Spacer" faIcon={faAlignRight} onClick={this.AddElementToColumn} />
                            <EditorButton text="Icon" faIcon={faArrowDown} onClick={this.AddElementToColumn} />
                            <EditorButton text="Video" faIcon={faCircle} onClick={this.AddElementToColumn} />
                            <EditMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} />
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
                        <EditorButton text="Icon" faIcon={faArrowDown} onClick={this.props.onPush} />
                        <EditorButton text="Video" faIcon={faCircle} onClick={this.props.onPush} />
                    </div>
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