import React, { Component } from "react";
import axios from 'axios';
import SiteIcon from './SiteIcon';
import '../css/SitePage.css'
import AjaxCall from '../ajax.js';

export default class SitePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            image: '',
            description: '',
        }
    }

    componentDidMount() {
        var target = 'https://www.google.com';
        axios({
            method: 'post',
            url: "http://api.linkpreview.net",
            dataType: 'jsonp',
            data: { q: target, key: '123456' } // 
        }).then(response => {
            this.setState({
                title: response.data.title,
                image: response.data.image,
                description: response.data.description
            });
            console.log(response);
        });
        if (sessionStorage.getItem('id') !== null) {
            AjaxCall({ function: 'getWebsiteData', accountId: sessionStorage.getItem('id') },
                function (response) {
                    //TODO: This is where you can perform actions with the response that you recieved from the backend
                });
        } else {
        }
    }

    render() {
        // Essentially what my response should look like from server
        const websites = [
            {
                title: "Website1",
                image: "https://cdn.pixabay.com/photo/2013/11/28/10/36/road-220058_1280.jpg",
                description: "Web1"
            },
            {
                title: "Website2",
                image: "https://cdn.pixabay.com/photo/2013/10/02/23/03/dawn-190055_1280.jpg",
                description: "Web2"
            },
            {
                title: "Website3",
                image: "https://cdn.pixabay.com/photo/2014/09/10/00/59/utah-440520_1280.jpg",
                description: "Web3"
            }
        ];
        console.log(websites)
        return (
            <div className="SitePage">
                <div className="Menu">
                    <a href="#AccountSettings">Account Settings</a>
                    <a href="#LogOut">Log Out</a>
                    <a href="#Upgrade">Upgrade</a>
                </div>
                <div className="Content">
                    <div className="SiteList">
                        <div>
                            <div className="SiteIcon" onClick={this.props.onClick}>
                                <p>{this.state.title}</p>
                                <img src={this.state.image} alt="test" />
                                <p>description: {this.state.description}</p>
                            </div>
                            {websites.map((site) =>
                                <div className="SiteIcon" onClick={this.props.onClick}>
                                    <p>{site.title}</p>
                                    <img src={site.image} alt="test" />
                                    <p>description: {site.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
