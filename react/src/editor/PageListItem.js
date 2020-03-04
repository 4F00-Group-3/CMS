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
            <div className="PageListItem">
                {this.props.title}
                <div className="LinkContainer">
                {/* style={LinkContainerStyle} */}
                    <a href='#' className="Link" onClick={this.props.onPageEdit}> Edit</a>
                    {/* style={LinkStyle} */}
                    <a href='#' className="Link" onClick={this.props.onPageDelete}> Delete</a>
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