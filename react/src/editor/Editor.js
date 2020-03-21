import React, { Component } from 'react';
import EditorSideBar from './components/EditorSidebar';
import EditingPage from '../editor/components/EditingPage';
import EditorBackend from './EditorBackend';

const backend = new EditorBackend();

class Editor extends Component {
    constructor(props) {
        super(props);
        this.onClick.bind(this.onClick);
        this.state = {
            page: props.page,
            menu: "main",
        }
    }

    onClick = (name) => {
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
            case "Size": {
                backend.add("Size");
                this.setState({ page: backend.getPage() })
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

    onSectionPush = (id, type) => {
        console.log(type)
        switch(type) {
            case "heading": {
                this.setState({
                    menu: "heading",
                })
                break;
            }
            default: {
                this.setState({
                    menu: "main",
                })
            }
        }
    }

    render() {
        return (
            <>
                <EditorSideBar onPush={this.onClick} menu={this.state.menu}/>
                <EditingPage page={this.state.page} onSectionPush = {this.onSectionPush}/>
            </>
        );
    }
}

export default Editor;