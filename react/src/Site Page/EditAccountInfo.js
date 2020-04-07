import React, { Component } from "react";
import '../css/SitePage.css'
import AjaxCall from '../ajax.js';
// import Login from '../Components/loginpage';

export default class AccountSettings extends Component {
constructor(props) {
    super(props);

    this.state = {
        userLoggedIn: true,
        page:<AccountSettings/>,
    }
    // this.handleLogOut = this.handleLogOut.bind(this);
    // this.handleRedirectToAccoutingSettings = this.handleRedirectToAccoutingSettings.bind(this);
    // this.handleUpgradePlan = this.handleUpgradePlan.bind(this);
    
}


handleSubmit=()=>{
    console.log("Submitted")
}

render() {
    var userLoggedIn = this.state.userLoggedIn;
    return (
        <>
            {/* {userLoggedIn ? */}
                <div className="SitePage">
                    <div className="Menu">
                        <p onClick={this.props.NavToAccountSettings}>Account Settings</p>
                        <p /*onClick={this.handleLogOut}*/>Log Out</p>
                        <p /*onClick={this.handleUpgradePlan}*/>Upgrade</p>
                    </div>
                    <div className="Content" style={{textAlign: "center", fontSize: "20px"}}>
                        <h1>
                            Edit Account Info
                        </h1>
                       <br></br><br></br>
                       <div>
                           <label for="EditName">Enter Your First Name: &nbsp;&nbsp;</label>
                           <input className="EditName"></input>
                       </div>
                       <br></br><br></br>
                       <div>
                           <label for="EditName">Enter Your Last Name: &nbsp;&nbsp;</label>
                           <input className="EditName"></input>
                       </div>
                       <br></br><br></br>
                       <div>
                           <label for="EditName">Enter Your Email Address: &nbsp;&nbsp;</label>
                           <input className="EditName"></input>
                       </div>
                       <br></br><br></br><br></br><br></br>
                        {/* add onclick to below button for updating info entered in the DB */}
                        <button onClick={this.handleSubmit}>
                            Submit
                        </button>
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
                
        </>

    );
    }
}