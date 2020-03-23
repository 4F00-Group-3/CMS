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
           <div></div>
        );
    }
}