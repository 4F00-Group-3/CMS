import React, { Component } from "react";
import SideBar from './SideBar';
import Page from './Page';


class LiveEditor extends Component {
  render() {
    return (
      <div className='editor'>
        <SideBar/>
        <Page/>
      </div>
    );
  }
};

export default LiveEditor;