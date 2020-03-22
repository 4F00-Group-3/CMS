import React, { Component } from "react";
import axios from 'axios';
import SiteIcon from './SiteIcon';

export default class SitePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            description: '',
            renderSite: false
        }
    }

    componentDidMount() {
        var target = 'https://www.google.com';
        fetch("http://playground.ajaxtown.com/link_preview/class.linkpreview.php?url" + target)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            });
        axios({
            method: 'post',
            url: "http://api.linkpreview.net",
            dataType: 'jsonp',
            data: { q: target, key: '123456' }
        }).then(data => {
            this.setState({
                title: data.data.title,
                image: data.data.image,
                description: data.data.description
            });
            console.log(data);
            this.setState({renderSite:true});
        });
    }

    render() {
        return (
            <div>
            {this.state.render ? <SiteIcon title={this.state.title} image={this.state.image} description={this.state.description} /> : 'hi'}
            </div>
        );
    }
}
