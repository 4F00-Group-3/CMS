import React, { Component } from "react";

export default class SiteIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            image: props.image,
            description: props.description
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <img src={this.state.image} alt="test" width="500" height="250" />
                <p>{this.state.description}</p>
            </div>
        );
    }
}