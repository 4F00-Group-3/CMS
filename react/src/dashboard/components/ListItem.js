import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.onClick.bind();
    };

    onClick() {
        console.log(this.constructor.name + " was clicked");
    }

    render() {

        if (this.props.type === "page") {
            return (
                <div className="PageListItem">
                    {this.props.title}
                    <div className="LinkContainer">
                        <a href='#' className="Link" onClick={this.props.onPageEdit}> Edit</a>
                        <a href='#' className="Link" onClick={this.props.onPageDelete}> Delete</a>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div className="UserListItem">
                    {this.props.title}
                    <div className="LinkContainer">
                        <a href='#' className="Link" onClick={this.props.onDelete}> Delete</a>
                    </div>
                </div>
            );
        }
    }
}


export default ListItem;