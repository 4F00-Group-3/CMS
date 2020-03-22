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
            selectedId: undefined,
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

    onSectionPush = (_id, _type, _style) => {
        console.log(_type)
        switch(_type) {
            case "heading": {
                this.setState({
                    menu: "heading",
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

    menuComponentOnClick = (css) =>{
        var cssKey = css.split(":")[0]
        var cssValue = css.split(":")[1]
        backend.editSection(this.state.selectedId, cssKey, cssValue);
        this.setState(
            {page: backend.getPage(),}
        )
    }

    render() {
        return (
            <>
                <EditorSideBar onPush={this.onClick} menu={this.state.menu} selectedId={this.state.selectedId} menuComponentOnClick={this.menuComponentOnClick}/>
                <EditingPage page={this.state.page} onSectionPush = {this.onSectionPush}/>
            </>
        );
    }
}

export default Editor;