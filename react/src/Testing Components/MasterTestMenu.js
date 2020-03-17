import React, { Component } from "react";
import Home from '../HomePage';
import Editor from '../editor/Editor';

class MasterTestMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewPage: ""
    };

    this.handleEditorClick = this.handleEditorClick.bind(this);
    this.handleHomeClick = this.handleHomeClick.bind(this);
  }

  handleEditorClick() {
    this.setState({ viewPage: "Editor" });
  }

  handleHomeClick() {
    this.setState({ viewPage: "Home" });
  }

  render() {
    const view = this.state.viewPage;
    let page;
    switch (view) {
      case "Editor":
        page = <Editor />;
        break;
      case "Home":
        page = <Home />;
        break;
      default:
        page = <Home />;
    }
    return (
      <div>
        <div>
          <button onClick={this.handleEditorClick}>Editor</button>
          <button onClick={this.handleHomeClick}>Home</button>
        </div>
        <div id="testingCanvas">
          {page}
        </div>
      </div>

       
    );
  }
}
export default MasterTestMenu;