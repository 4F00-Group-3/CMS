import React, { Component } from 'react';

class PageItem extends Component {
    constructor(props){
        super(props);
        this.onClick.bind();
    };

    onClick() {
        console.log(this.constructor.name + " was clicked");
    }

    render() {
        return(
            <div>
                {this.props.title}
                <a href='#' onClick={this.props.onPageEdit}> edit</a>
                <a href='#' onClick={this.props.onPageDelete}> delete</a>
            </div>
        );
    }
}

export default PageItem;