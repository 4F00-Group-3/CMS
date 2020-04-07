import React, { Component } from "react";
import '../css/SitePage.css'
import AjaxCall from '../ajax.js';
import Login from '../Login/loginpage';

class Popup extends Component {
    
    render() { 
      return (
        <div className='popup'>
          <div className='popup_inner' style={{textAlign: "center"}}>
              <h3>{this.props.text}</h3>
              <br></br>
              
              {/* make onclick for confirm button that deletes account from DB */}
              <button /*onClick={this.getTitleOfPage}*/>Confirm</button>&nbsp;&nbsp;
              <button onClick={this.props.closePopup}>Cancel</button>
          </div>
        </div>
      );
    }
  }


export default class AccountSettings extends Component {
constructor(props) {
    super(props);

    this.state = {
        userLoggedIn: true
    }
    // this.handleLogOut = this.handleLogOut.bind(this);
    // this.handleUpgradePlan = this.handleUpgradePlan.bind(this);
    this.handleRedirectToChangePassword = this.handleRedirectToChangePassword.bind(this);
}

togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
}


render() {
    var userLoggedIn = this.state.userLoggedIn;
    return (
        <>
            {userLoggedIn ?
                <div className="SitePage">
                    <div className="Menu">
                        <p>Account Settings</p>
                        <p /*onClick={this.handleLogOut}*/>Log Out</p>
                        <p /*onClick={this.handleUpgradePlan}*/>Upgrade</p>
                    </div>
                    <div className="Content" style={{textAlign: "center"}}>
                        <h1>
                            Account Settings
                        </h1>
                        <br></br><br></br>
                        <div className="LinkContainer">
                        <button
                            href="#"
                            className="accountSettingsButton"
                            onClick={this.props.handleEditAccountInfo}
                            >
                            {" "}
                            Edit Account Information
                        </button>
                        <br></br><br></br>
                        <button
                            href="#"
                            className="accountSettingsButton"
                            //   make onClick for routing to password change
                            >
                            Change Password
                        </button>
                        <br></br><br></br>
                        <button
                            href="#"
                            className="accountSettingsButton"
                            //   make onClick for subscription change
                            >
                            {" "}
                            Modify Subscription
                        </button>
                        <br></br><br></br>
                        <button
                            href="#"
                            className="accountSettingsButton"
                            //   make onClick for subscription change
                            >
                            {" "}
                            Cancel Subscription
                        </button>
                        <br></br><br></br>
                        <button
                            href="#"
                            className="accountSettingsButton"
                            onClick={this.togglePopup.bind(this)}
                            >
                            {" "}
                            Delete Account
                        </button>
                        {this.state.showPopup ? 
                            <Popup
                                text='Are you sure you want to delete your account?'
                                closePopup={this.togglePopup.bind(this)}
                                titlePage={this.createPage}
                                
                                />
                            : null
                        }
                        <br></br><br></br>
                    </div>
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