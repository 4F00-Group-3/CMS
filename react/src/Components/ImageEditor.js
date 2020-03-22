import React, { Component } from "react";
import "./css.css";
import { Button, Tab, Tabs } from "react-mdl";

/*This file contains all of the sub-components of the Image Editor Component of the Website Editor*/

class ImageEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  } /*This gives a number to the tabs */

  state = {
    selectedFile: null
  };

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };

  fileUploadHandler = () => {
    /*This would be where we'd put the server info... see youtube video referenced below*/
  };

  sizeChangeHandler(event) {
    this.setState({ imgSize: event.target.value });
  } /*updates internal image size (imgSize) -- usually, once you change or set the value in a form, it stays that way but this allows for it to be changed (or saved dynamically)*/

  sizeSetHandler = () => {
    /*Apply size change to uploaded image*/
  };

  capChangeHandler(event) {
    this.setState({ imgCap: event.target.value });
  } /*updates internal image size (imgSize) -- usually, once you change or set the value in a form, it stays that way but this allows for it to be changed (or saved dynamically)*/

  capSetHandler = () => {
    /*Apply size change to uploaded image*/
  };

  /*Depending on what tab is selected, the following are the pages of the editor*/

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <br />
          {/*Image Upload*/}
          <h6 className="Menu-Heading">Upload Image</h6>
          <input type="file" onChange={this.fileSelectedHandler} />
          <Button style={{ float: "right" }} onClick={this.fileUploadHandler}>
            Upload
          </Button>
          <br />
          <br />
          <hr />
          {/*Image Size Changing*/}
          <h6 className="Menu-Heading">Image Size</h6>
          <p style={{ fontStyle: "italic" }}>
            Reduce or increase size by percentage:{" "}
          </p>
          <input
            className="inputNum"
            type="number"
            name="imgSize"
            value={this.state.imgSize}
            onChange={this.sizeChangeHandler.bind(
              this
            )} /*captures changes to size*/
          />
          %
          <Button style={{ float: "right" }} onClick={this.sizeSetHandler}>
            Apply
          </Button>
          <br />
          <br />
          <hr />
          {/*Image Caption Changing*/}
          <h6 className="Menu-Heading">Image Caption</h6>
          <input
            type="text"
            name="imgCap"
            value={this.state.imgCap}
            onChange={this.capChangeHandler.bind(
              this
            )} /*captures changes to caption*/
          />
          <Button style={{ float: "right" }} onClick={this.capSetHandler}>
            Add
          </Button>
        </div>
      );
      {
        /* Uploads image, sets image size, aligns image and gives it a caption */
      }
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <p>STYLE PAGE</p>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <p>ADVANCED PAGE</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="demo-tabs">
        <h5 className="editorMenu">Image Editor</h5>
        <Tabs
          defaultIndex={0}
          onChange={index => this.setState({ activeTab: index })}
        >
          <Tab>Content</Tab>
          <Tab>Style</Tab>
          <Tab>Advanced</Tab>
        </Tabs>
        <section>{this.toggleCategories()}</section>
      </div>
    );
  }
}

export default ImageEditor;

{
  /*https://www.youtube.com/watch?v=XeiOnkEI7XI&t=20s
  https://github.com/codingforentrepreneurs/Try-Reactjs/blob/master/src/learn/ImgDropAndCrop.js
  npm install react-image-crop --save*/
}
