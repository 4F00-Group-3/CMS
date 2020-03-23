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
        if(sessionStorage.getItem('id')!==null) {
            AjaxCall({function: 'getWebsiteData', accountId: sessionStorage.getItem('id')},
                function (response) {
                    //TODO: This is where you can perform actions with the response that you recieved from the backend
                });
        }else{
            // TODO: Redirect to loginpage
        }

        // var target = 'https://www.google.com';
        // axios({
        //     method: 'post',
        //     url: "http://api.linkpreview.net",
        //     dataType: 'jsonp',
        //     data: { q: target, key: '123456' }
        // }).then(response => {
        //     this.setState({
        //         title: response.data.title,
        //         image: response.data.image,
        //         description: response.data.description
        //     });
        //     console.log(response);
        // });
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
                    {/* this code should be refactored as a SiteIcon component, need to figure out how to update a component on completion of an async call. */}
                        <h1>{this.state.title}</h1>
                        <img src={this.state.image} alt="test" width="500" height="250" />
                        <p>{this.state.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}
