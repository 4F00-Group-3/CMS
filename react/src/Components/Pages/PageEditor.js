import React, { Component } from "react";

class PageEditor extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //     'title': this.props.title,
    //     'segment': this.props.segment,
    // }

    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(event) {
    console.log("handle page change " + event);
    let name = event.target.name;
    this.props.onPageUpdate(
      this.props.id,
      event.target.name,
      event.target.value
    );
  }

  componentWillReceiveProps(props) {
    // this.setState({
    //     'title': props.title,
    //     'segment': props.segment,
    // })
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            onChange={this.handlePageChange}
            name="title"
            value={this.props.title}
          />
          <br />
          <input
            type="text"
            onChange={this.handlePageChange}
            name="segment"
            value={this.props.segment}
          />
        </div>

        <a href="#" onClick={this.props.onPageCancel}>
          {" "}
          cancel
        </a>
      </div>
    );
  }
}

export default PageEditor;
