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
            activeSection: undefined
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
            default: {
                this.setState({
                    menu: "main",
                    selectedId: undefined,
                })
            }
        }
    }

    menuComponentOnClick = (css) => {
        console.log(css.split("|").length, css)


        switch (css.split("|").length) {
            case 2: {
                var cssKey = css.split("|")[0]
                var cssValue = css.split("|")[1]
                backend.editSectionStyle(this.state.selectedId, cssKey, cssValue);
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
        this.setState({menu:'main'});
    }

    handleDelete = () => {
        var page = this.state.page;
        var activeSection = this.state.activeSection.state.active;

        console.log(page);

        for (let i = 0; i < page.length; i++) {
            if(page[i].id == activeSection){
                page.splice(i, 1);

            }
        }
        console.log(this.state.activeSection);

        this.state.activeSection.setState({active:0});
        this.handleBack();
    }

    setActive = (i, activeSec) => {
        this.setState({activeSection: activeSec})
    }


    render() {
        return (
            <>
                <EditorSideBar onPush={this.onClick} menu={this.state.menu} selectedId={this.state.selectedId} menuComponentOnClick={this.menuComponentOnClick} handleBack={this.handleBack} handleDelete={this.handleDelete} />
                <EditingPage page={this.state.page} onSectionPush={this.onSectionPush} setActive={this.setActive} />
            </>
        );
    }
}

export default Editor;