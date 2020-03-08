import React, { Component } from 'react';

class PageListItem extends Component {
    constructor(props) {
        super(props);
        this.onClick.bind();
    };

    onClick() {
        console.log(this.constructor.name + " was clicked");
    }

    render() {
        return (
            <div>
                {this.props.title}
                <div style={LinkContainerStyle}>
                    <a href='#' style={LinkStyle}  onClick={this.props.onPageEdit}> Edit</a>
                    <a href='#' style={LinkStyle} onClick={this.props.onPageDelete}> Delete</a>
                </div>
            </div>
        );
    }
}

const LinkContainerStyle = {
    float: "right",
}

const LinkStyle= {
    paddingLeft: "7vh"
}
export default PageListItem;