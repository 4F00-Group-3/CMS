import React, { Component } from 'react';
import EditorSideBar from './components/EditorSidebar';
import EditingPage from '../editor/components/EditingPage';

class Editor extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor: ", this.props)
        this.onClick.bind(this.onClick);
        this.state = {
            page: props.page,
        }
    }

    onClick(name) {
        console.log(name);
        switch (name) {
            case "Heading": {
                console.log(this.state)

                break;
            }
            case "Image": {
                
                console.log(name);
                //this.state.page.concat(<p>img</p>)
               break;
            }
            case "Button": {
                
                console.log(name);
                //this.state.page.concat(<p>btn</p>)
                break;
            }
            case "Dividers": {
                
                console.log(name);
                //this.state.page.concat(<p>div</p>)
                break;
            }
            case "Spacer": {
                
                console.log(name);
                //this.state.page.concat(<p>space</p>)
                break;
            }
            case "Size": {
                
                console.log(name);
                //this.state.page.concat(<p>size</p>)
                break;
            }
            case "Icon": {
                console.log(name);
                //this.state.page.concat(<p>icon</p>)
                break;
            }
            case "Video": {
                //this.state.page.concat(<p>vid</p>)
                console.log(name);
                break;
            }
            default:
                break;
        }

    }

    render() {
        return (
            <>
                <EditorSideBar onPush={this.onClick} page={this.props.page} />
                <EditingPage page={this.state.page} />
            </>
        );
    }
}

export default Editor;