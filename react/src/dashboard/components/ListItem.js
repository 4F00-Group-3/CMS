import React, { Component } from "react";
import "../../css/PageAdmin.css";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.onClick.bind();
  }

  onClick() {
    console.log(this.constructor.name + " was clicked");
  }

  render() {
    if (this.props.type === "page") {
      return (
        <div className="PageListItem">
          {this.props.title}
          <div className="LinkContainer">
            <button
              className="inner-edit-dashButtons"
              onClick={this.props.onPageEdit}
            >
              {" "}
              Edit
            </button>
            <button
              href="#"
              className="inner-delete-dashButtons"
              onClick={this.props.onPageDelete}
            >
              {" "}
              Delete
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="UserListItem">
          {this.props.title}
          <div className="LinkContainer">
            <button
              href="#"
              className="inner-delete-dashButtons"
              onClick={this.props.onDelete}
            >
              {" "}
              Delete 
            </button>
          </div>
        </div>
      );
    }
  }
}

export default ListItem;
