//import React from "react";
import React, { Component } from "react";
import "./App.css";
import Editor from './editor/Editor';
import Backend from './dashboard/PagesDashBackend'
import Start from './HomePage'

class App extends Component {
  render() {
    return (
      <div>
        <Start/>
      </div>
    );
  }
}
export default App;
