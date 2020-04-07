import React, { Component } from 'react';
import '../../../css/Editor.css'
import {
    faFont,
    faFileImage,
    faBars,
    faAlignRight,
    faAsterisk,
    faArrowDown,
    faCircle,
} from "@fortawesome/free-solid-svg-icons";
import EditorButton from '../../components/EditorButton';
import HeadingEditorMenu from './HeadingEditorMenu';
import ButtonEditorMenu from './ButtonEditorMenu';
import EditDividerMenu from './EditDividerMenu';
import IconEditorMenu from './IconEditorMenu';
import ImageEditorMenu from './ImageEditorMenu';
import VideoEditorMenu from './VideoEditorMenu';
import RowMenuNav from './EditorMenuNav';
import SpacerEditorMenu from './SpacerEditorMenu';
import EditorBackend from '../../EditorBackend';

const backend = new EditorBackend();

class EditorSideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: "menu",
            columnId: this.props.columnId
        };
    }

     /**
     * This method adds appends a PageSection component in to the EditingPage
     * It does this by appending it to the page json (handled in the EditorBackend)
     * This new page object is re-rendered on to the EditingPage when setState is called
     * @param the name of the component which is recieved from the the button clicked on EditorSidebar
     */
    AddElementToColumn = (name) => {
    //    this.props.onPush("Column", name, this.props.rowId);
    this.props.onPush(name);
    }

    /**
     * This method handles what menu to display in the EditorSidebar
     * based on which PageSection component the user clicked in the EditingPage
     * @param _id this is the idea of the specific component
     * @param _type this is the type of the specific component
     */
    menuButtonClick = (_id, _type) => {
        switch (_type) {
            case "heading": {
                this.setState({
                    menu: "heading",
                    selectedId: _id,
                })
                break;
            }
            case "divider": {
                this.setState({
                    menu: "divider",
                    selectedId: _id,
                })
                break;
            }
            case "image": {
                this.setState({
                    menu: "image",
                    selectedId: _id,
                })
                break;
            }
            case "icon": {
                this.setState({
                    menu: "icon",
                    selectedId: _id,
                })
                break;
            }
            case "video": {
                this.setState({
                    menu: "video",
                    selectedId: _id,
                })
                break;
            }
            case "button": {
                this.setState({
                    menu: "button",
                    selectedId: _id,
                })
                break;
            }
            case "spacer": {
                this.setState({
                    menu: "spacer",
                    selectedId: _id,
                })
                break;
            }
            case "row": {
                this.setState({
                    menu: "row",
                    selectedId: _id,
                })
                break;
            }
            default: {
                this.setState({
                    menu: "main",
                    selectedId: undefined,
                })
            }
        }
    }

    /**
     * This method re-renders the css on a PageSection component in the 
     * EditingPage based on what the user inputted into the specific component's menu
     * @param css the new css to apply to the PageSection component on the EditingPage
     */
    menuComponentOnClick = (css) => {
        console.log("Editor Selected Id", this.state.selectedId);
        console.log(css.split("|").length, css)


        switch (css.split("|").length) {
            case 2: {
                var cssKey = css.split("|")[0]
                var cssValue = css.split("|")[1]
                if (cssKey === "Col") {
                    backend.editSectionRow(this.state.selectedId, cssValue);
                } else {
                    // backend.editSectionStyle(this.state.selectedId, cssKey, cssValue);
                    backend.editSectionStyle_Param(this.state.selectedId, cssKey, cssValue);
                }
                break;
            }
            case 3: {
                var jsonField = css.split("|")[0];
                var jsonValue = css.split("|")[1];
                backend.editTextField(this.state.selectedId, jsonField, jsonValue);
                break;
            }
            default:
                break;
        }

        this.setState(
            { page: backend.getPage(), }
        )
    }

    handleBack = () => {
        this.setState({ menu: 'main' });
    }

    handleDelete = () => {
        var page = this.state.page;
        var activeSection = this.state.activeSection;

        console.log(page);

        for (let i = 0; i < page.length; i++) {
            if (page[i].id === activeSection) {
                page.splice(i, 1);

            }
        }
        console.log(this.state.activeSection);

        // this.state.activeSection.setState({ active: 0 });
        this.handleBack();
    }

    setActive = (i) => {
        // console.log("activeSec", activeSec);
        this.setState({ activeSection: i })
    }

    returnMenu() {
        let menu = this.state.menu;
        switch (menu) {
            case "heading": {
                return <> <HeadingEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.menuButtonClick} /> <RowMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </>
            }
            case "divider": {
                return <> <EditDividerMenu selectedId={this.props.selectedId} menuComponentOnClick={this.menuButtonClick} /><RowMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </>
            }
            case "image": {
                return <> <ImageEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.menuButtonClick} /> <RowMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </>
            }
            case "icon": {
                return <> <IconEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.menuButtonClick} /> <RowMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </>
            }
            case "video": {
                return <> <VideoEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.menuButtonClick} /> <RowMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </>
            }
            case "button": {
                return <> <ButtonEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.menuButtonClick} /> <RowMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </>
            }
            case "spacer": {
                return <> <SpacerEditorMenu selectedId={this.props.selectedId} menuComponentOnClick={this.menuButtonClick} /> <RowMenuNav handleBack={this.props.handleBack} handleDelete={this.props.handleDelete} /> </>
            }
            default: {
                return <>
                    <div className="editor-buttons-container">
                        <EditorButton text="Heading" faIcon={faFont} onClick={this.AddElementToColumn} />
                        <EditorButton text="Image" faIcon={faFileImage} onClick={this.AddElementToColumn} />
                        <EditorButton text="Button" faIcon={faAsterisk} onClick={this.AddElementToColumn} />
                        <EditorButton text="Dividers" faIcon={faBars} onClick={this.AddElementToColumn} />
                        <EditorButton text="Spacer" faIcon={faAlignRight} onClick={this.AddElementToColumn} />
                        <EditorButton text="Icon" faIcon={faArrowDown} onClick={this.AddElementToColumn} />
                        <EditorButton text="Video" faIcon={faCircle} onClick={this.AddElementToColumn} />
                    </div>
                </>
            }
        }
    }


    render() {
        console.log("in row sidebar menu", this.state.columnId);
        return (
            <div className="Editor-SideBar-Container">
                {/* editor menus to be tested here */}
                {this.returnMenu()}
            </div>
        );
    };
}


export default EditorSideBar