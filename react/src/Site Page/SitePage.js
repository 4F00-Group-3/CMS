import React, { Component } from "react";
// import axios from 'axios';
// import SiteIcon from './SiteIcon';
import '../css/SitePage.css'
import AjaxCall from '../ajax.js';
import Login from '../Components/loginpage';
import AccountSettings from './AccountSettings';

export default class SitePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userLoggedIn: true,
            
        }
        this.handleLogOut = this.handleLogOut.bind(this);
        this.handleRedirectToAccoutingSettings = this.handleRedirectToAccoutingSettings.bind(this);
        this.handleUpgradePlan = this.handleUpgradePlan.bind(this);
    }

    componentDidMount() {
        // var target = 'https://www.google.com';
        const self = this;
        //
        // // Just for testing purposes, When the database is filled with valid data, remove the axios code.
        // axios({
        //     method: 'post',
        //     url: "http://api.linkpreview.net",
        //     dataType: 'jsonp',
        //     data: { q: target, key: '123456' } //
        // }).then(response => {
        //     self.setState({
        //         siteInfo: [
        //             {
        //                 title: response.data.title,
        //                 image: response.data.image,
        //                 description: response.data.description
        //             }
        //         ]
        //     });
        //     console.log(this.state.siteInfo);
        // });

        sessionStorage.setItem('id', "79"); // for testing purposes
        if (sessionStorage.getItem('id') !== null) {
            this.setState({ userLoggedIn: true });
            // console.log("ajaxcall"); // to see if it actually went thru
            // AjaxCall({ function: 'getWebsiteData', accountId: sessionStorage.getItem('id') },
            //     function (response) {
            //         response = response.split("php-cgi")[1].trim();
            //         var json = JSON.parse(response);
            //         console.log(json);
            //         // console.log("Wassup");
            //         self.setState({
            //             siteInfo: json
            //         });
            //     });
        } else {
            // Redirect to login
            this.setState({ userLoggedIn: false });

            // The code below is for testing purposes 
            /*
            sessionStorage.setItem('id', "79"); // for testing purposes
            var json = [
                { "name": "Website1", "image": "https:\/\/cdn.pixabay.com\/photo\/2013\/11\/28\/10\/36\/road-220058_1280.jpg", "description": "Web1" },
                { "name": "Website2", "image": "https:\/\/cdn.pixabay.com\/photo\/2013\/10\/02\/23\/03\/dawn-190055_1280.jpg", "description": "Web2" },
                { "name": "Website3", "image": "https:\/\/cdn.pixabay.com\/photo\/2014\/09\/10\/00\/59\/utah-440520_1280.jpg", "description": "Web3" }
            ];
            self.setState({
                siteInfo: json
            });
            */
        }
    }

    /**
     * This method handles user log out
     */
    handleLogOut() {
        // For testing purposes
        var id = sessionStorage.getItem('id');
        alert(id + " Logged Out!");
        sessionStorage.removeItem("id");
    }

    /**
     * This method handles redirect to account settings
     */
    handleRedirectToAccoutingSettings() {
        this.setState({
            page: <AccountSettings/>
        });
        console.log(this.state);
        // For testing purposes
        // alert("Redirecting to Account Settings...oops we don't have an account settings page");
    }

    /**
    * This method handles redirect to account settings
    */
    handleUpgradePlan() {
        // For testing purposes
        alert("Upgrading you to Supreme Overlord of the Universe!!");
    }

    render() {
        var userLoggedIn = this.state.userLoggedIn;
        return (
            <>
                {userLoggedIn ?
                    <div className="SitePage">
                        <div className="Menu">
                            <p onClick={() => this.props.NavToAccountSettings("Testing")}>Account Settings</p>
                            <p onClick={this.handleLogOut}>Log Out</p>
                            <p onClick={this.handleUpgradePlan}>Upgrade</p>
                        </div>
                        <div className="Content">

                            <h1>Site Page</h1>
                            
                            {/* <div className="SiteList">
                                <div>
                                    {this.state && this.state.siteInfo &&
                                        this.state.siteInfo.map((site, index) =>
                                            <div key={index}>
                                                <div className="SiteIcon">
                                                    <p>{site.name}</p>
                                                    <img src={site.image} alt={site.name} />
                                                    <p>description: {site.description}</p>
                                                    <div className="row">
                                                        <div className="column">
                                                            <button onClick={this.props.onClick} value="Edit">Edit</button>
                                                        </div>
                                                        <div className="column">
                                                            <button value="View">View</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div> */}
                        </div>
                    </div>
                    :
                    <Login />
                }
            </>

        );
    }
}
