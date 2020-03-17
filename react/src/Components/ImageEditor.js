import React, { Component } from "react";
import "./css.css";
import {
  FooterSection,
  Footer,
  FooterLinkList,
  Layout,
  Drawer,
  Navigation,
  Content,
  Tab,
  Tabs
} from "react-mdl";

class ImageEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 2 };
  }

  render() {
    return (
      <div className="demo-tabs">
        <h5 className="editorMenu">Image Editor</h5>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Content</Tab>
          <Tab>Style</Tab>
          <Tab>Advanced</Tab>
        </Tabs>
        <section>
          <div className="content">
            Content for the tab: {this.state.activeTab}
          </div>
        </section>
      </div>
    );
  }
}

export default ImageEditor;
