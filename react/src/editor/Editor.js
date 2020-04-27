import React, { Component } from 'react';
import EditorSideBar from './components/EditorSidebar';
import EditingPage from '../editor/components/EditingPage';
import EditorBackend from './EditorBackend';
import Button from 'react-bootstrap/Button'

// Backend Connector for Editor
const backend = new EditorBackend();

/**
 * This class represents the Editor page where the user is able to create and edit their pages
 */
class Editor extends Component {
    constructor(props) {
        super(props);
        this.addToPage_onClick.bind(this.addToPage_onClick);
        this.state = {
            page: props.page,
            menu: "main",
            selectedId: undefined,
            selectedRowNumberOfColumns: undefined,
        };

        // redirect user to home page if the user has not signed in
        if (sessionStorage.getItem('id') === null) {
            props.handleHomeClick();
        }
        // console.log(this.state.page);

        //page is undefined if the Editor is accessed from the top nav bar
        if(this.state.page !== undefined){
            backend.setPage(this.state.page.file);
        } else {
            backend.setPage([]);
        }
        
    }

    componentDidMount = () => {
        //render the selected page
        this.setState({page: backend.getPage()});
    }


    /**
     * This method adds appends a PageSection component in to the EditingPage
     * It does this by appending it to the page json (handled in the EditorBackend)
     * This new page object is re-rendered on to the EditingPage when setState is called
     * @param name the name of the component which is recieved from the the button clicked on EditorSidebar
     * @param subName the name of the component to add into a column
     * @param columnId the id of the column to ass the subName component into
     */
    addToPage_onClick = (name, subName, columnId) => {
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
                this.setState({ page: backend.getPage(), selectedRowNumberOfColumns: 1 })
                console.log("editor getpage", backend.getPage());
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
            case "Column": {
                backend.add("Column", subName, columnId);
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
     */
    pageSection_onClick = (_id, _type) => {
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
            case "column": {
                this.setState({
                    menu: "column",
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
        switch (css.split("|").length) {
            case 2: {
                var cssKey = css.split("|")[0]
                var cssValue = css.split("|")[1]
                if (cssKey === "Col") {
                    console.log("col number edited", this.state.selectedId, cssValue)
                    this.setState({
                        selectedRowNumberOfColumns: backend.editSectionRow(this.state.selectedId, cssValue)
                    });

                } else {
                    backend.getSubMenuItem_Style(this.state.selectedId, cssKey, cssValue);
                }
                break;
            }
            case 3: {
                var jsonField = css.split("|")[0];
                var jsonValue = css.split("|")[1];
                backend.getSubMenuItem_Text(this.state.selectedId, jsonField, jsonValue);
                break;
            }
            default:
                break;
        }

        this.setState(
            { page: backend.getPage() }
        )
    }

    /**
     * This method handles going back to the last menu 
     */
    handleBack = () => {
        try {
            // find current element
            var menuItem = backend.getSubMenuItem(this.state.page, this.state.selectedId);
            var id = menuItem.id.toString().split("|");
            switch (id.length) {
                case 3: // within column element, go back to column
                    this.setState({
                        selectedId: id[0] + "|" + id[2],
                        menu: "column"
                    });
                    break;
                case 2: // inside row, go back to Row
                    this.setState({
                        selectedId: parseInt(id[0]),
                        menu: "row"
                    });
                    break;
                default: // unknown, just go back to main
                    this.setState({
                        selectedId: undefined,
                        menu: 'main'
                    });
                    break;
            }
        } catch (e) {
            // if anything just go back to main
            this.setState({
                selectedId: undefined,
                menu: 'main'
            });
        }
    }


    /**
     * This method handles deleting an element from the page
     */
    handleDelete = () => {
        var activeSection = this.state.selectedId;

        try {
            // Try and see if we are trying to delete an element within a column
            if (activeSection.split("|").length === 3) {
                // var sectionId = activeSection.split("|");
                // var rowId = sectionId[0];
                // var columnId = sectionId[1];
                // var colSectionId = sectionId[2];
                backend.getSubMenuItem_Delete(this.state.page, activeSection);
                // TODO: handle deleting a column if the column is empty
                // TODO: haandle deleting a row if the row is empty
            }
        } catch (Exception) {

            backend.getSubMenuItem_Delete(this.state.page, activeSection);
        }

        // go back to last menu, currently returns to main menu
        this.handleBack();
    }

    render() {
        return (
            <>
                <EditorSideBar onPush={this.addToPage_onClick} menu={this.state.menu} selectedId={this.state.selectedId} selectedRowNumberOfColumns={this.state.selectedRowNumberOfColumns} menuComponentOnClick={this.menuComponentOnClick} handleBack={this.handleBack} handleDelete={this.handleDelete} />
                <div style={{ marginLeft: "50vh" }}>
                    <EditingPage
                        page={this.state.page}
                        onSectionPush={this.pageSection_onClick}
                        backend={backend} />
                </div>
                <Button className='return-to-dash-btn' onClick={this.props.returnToDash}>Return to Dashboard</Button>
            </>
        );
    }
}

export default Editor;