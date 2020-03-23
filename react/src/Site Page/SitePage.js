import React, { Component } from "react";
import axios from 'axios';
import SiteIcon from './SiteIcon';
import '../css/SitePage.css'
import AjaxCall from '../ajax.js';

export default class SitePage extends Component {

    componentDidMount() {
        var target = 'https://www.google.com';
        const self = this;

        // Just for testing purposes, When the database is filled with valid data, remove the axios code.
        axios({
            method: 'post',
            url: "http://api.linkpreview.net",
            dataType: 'jsonp',
            data: { q: target, key: '123456' } // 
        }).then(response => {
            self.setState({
                siteInfo: [
                    {
                        title: response.data.title,
                        image: response.data.image,
                        description: response.data.description
                    }
                ]
            });
            console.log(this.state.siteInfo);
        });

        sessionStorage.setItem('id', 79); // for testing purposes
        if (sessionStorage.getItem('id') !== null) {
            console.log("ajaxcall"); // to see if it actually went thru
            AjaxCall({ function: 'getWebsiteData', accountId: sessionStorage.getItem('id') }, // There is no response from this call coming, having Casey look into this
                function (response) {

                    console.log("Hi") // testing to see if there is even a response
                    console.log(response);

                    
                    self.setState({
                        siteInfo: [
                            {
                                title: response.data.title,
                                image: response.data.image,
                                description: response.data.description
                            }
                        ]
                    });
                    console.log(this.state.siteInfo);
                });
        } else {
        }
    }

    render() {
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
                            {this.state && this.state.siteInfo &&
                                this.state.siteInfo.map((site, index) =>
                                    <div key={index}>
                                        <div className="SiteIcon" onClick={this.props.onClick}>
                                            <p>{site.title}</p>
                                            <img src={site.image} alt={site.title} />
                                            <p>description: {site.description}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
