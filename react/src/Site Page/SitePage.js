import React, { Component } from "react";
// import axios from 'axios';
// import SiteIcon from './SiteIcon';
import '../css/SitePage.css'
import AjaxCall from '../ajax.js';
import Login from '../Login/loginpage';
import {withRouter} from "react-router";

class SitePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userLoggedIn: true
        };
        this.handleLogOut = this.handleLogOut.bind(this);
        this.handleRedirectToAccoutingSettings = this.handleRedirectToAccoutingSettings.bind(this);
        this.handleUpgradePlan = this.handleUpgradePlan.bind(this);
    }

    componentDidMount() {
        const self = this;
        if (sessionStorage.getItem('id') !== null) {
            this.setState({ userLoggedIn: true });
            AjaxCall({ function: 'getWebsiteData', accountId: sessionStorage.getItem('id') },
                function (response) {
                    response = response.split("php-cgi")[1].trim();
                    var json = JSON.parse(response);
                    console.log(json);
                    // console.log("Wassup");
                    self.setState({
                        siteInfo: json
                    });
                });
        } else {
            // Redirect to login
            this.props.handleHomeClick();
            this.setState({ userLoggedIn: false });
        }
    }

    /**
     * This method handles user log out
     */
    handleLogOut() {
        // For testing purposes
        // var id = sessionStorage.getItem('id');
        sessionStorage.clear();
        this.props.handleHomeClick();
    }

    /**
     * This method handles redirect to account settings
     */
    handleRedirectToAccoutingSettings() {
        // For testing purposes
        alert("Redirecting to Account Settings...oops we don't have an account settings page");
    }

    /**
    * This method handles redirect to account settings
    */
    handleUpgradePlan() {
        // For testing purposes
        alert("Upgrading you to Supreme Overlord of the Universe!!");
    }

    handleViewWebsite = (info) =>{
        console.log(info);
        this.props.history.push('../../'+info);
        window.location.reload();

    };

    render() {
        var userLoggedIn = this.state.userLoggedIn;
        return (
            <>
                {userLoggedIn ?
                    <div className="SitePage">
                        <div className="Menu">
                            <p onClick={this.handleRedirectToAccoutingSettings}>Account Settings</p>
                            <p onClick={this.handleLogOut}>Log Out</p>
                            <p onClick={this.handleUpgradePlan}>Upgrade</p>
                        </div>
                        <div className="Content">
                            <div className="SiteList">
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
                                                            <button onClick={() => this.handleViewWebsite(site.path)} value="View">View</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <Login />
                }
            </>

        );
    }
}
export default withRouter(SitePage);