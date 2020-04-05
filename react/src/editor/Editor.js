import React, { Component } from 'react';
import EditorSideBar from './components/EditorSidebar';
import EditingPage from '../editor/components/EditingPage';
import EditorBackend from './EditorBackend';

const backend = new EditorBackend();

class Editor extends Component {
    constructor(props) {
        super(props);
        this.addToPage_onClick.bind(this.addToPage_onClick);
        this.state = {
            page: props.page,
            menu: "main",
            selectedId: undefined,
            activeSection: undefined
        };
        if (sessionStorage.getItem('id') === null) {
            props.handleHomeClick();
        }
    }

    /**
     * This method adds appends a PageSection component in to the EditingPage
     * It does this by appending it to the page json (handled in the EditorBackend)
     * This new page object is re-rendered on to the EditingPage when setState is called
     * @param the name of the component which is recieved from the the button clicked on EditorSidebar
     */
    addToPage_onClick = (name) => {
        console.log(name);
        switch (name) {
            case "Heading": {
                backend.add("Heading");
                this.setState({ page: backend.getPage() })
                break;
            }
            case "Image": {
                backend.add("Image");
                this.setState({ page: backend.getPage() })
                break;
            }
            case "Button": {
                backend.add("Button");
                this.setState({ page: backend.getPage() })
                break;
            }
            case "Dividers": {
                backend.add("Dividers");
                this.setState({ page: backend.getPage() })
                break;
            }
            case "Spacer": {
                backend.add("Spacer");
                this.setState({ page: backend.getPage() })
                break;
            }
            case "Row": {
                backend.add("Row");
                this.setState({ page: backend.getPage() })
                console.log(backend.getPage());
                break;
            }
            case "Icon": {
                backend.add("Icon");
                this.setState({ page: backend.getPage() })
                break;
            }
            case "Video": {
                backend.add("Video");
                this.setState({ page: backend.getPage() })
                break;
            }
            default:
                break;
        }
    }

    /**
     * This method handles what menu to display in the EditorSidebar
     * based on which PageSection component the user clicked in the EditingPage
     * @param _id this is the idea of the specific component
     * @param _type this is the type of the specific component
     * @param _style the css for the specific component
     */
    pageSection_onClick = (_id, _type, _style) => {
        console.log(_type)
        switch (_type) {
            case "heading": {
                this.setState({
                    menu: "heading",
                    selectedId: _id,
                })
                console.log(this.state.menu);
                console.log(this.state.selectedId);
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
                console.log("hi");
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


    render() {
        return (
            <>
                <EditorSideBar onPush={this.addToPage_onClick} menu={this.state.menu} selectedId={this.state.selectedId} menuComponentOnClick={this.menuComponentOnClick} handleBack={this.handleBack} handleDelete={this.handleDelete} />
                <div style={{ marginLeft: "50vh" }}>
                    <EditingPage page={this.state.page} onSectionPush={this.pageSection_onClick} setActive={this.setActive} />
                </div>
            </>
        );
    }
}

export default Editor;