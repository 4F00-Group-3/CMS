import React, { Component } from "react";
import '../css/SitePage.css'
import AjaxCall from '../ajax.js';
import Login from '../Login/loginpage';
import SitePageBackend from "../Site Page/backend/SitePageBackend";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Form } from "react-bootstrap";
import Settings from "./Settings";
import Button from 'react-bootstrap/Button';
import {
    Layout,
    Header,
    Content
} from "react-mdl";
import Jumbotron from 'react-bootstrap/Jumbotron';
let backend = new SitePageBackend();


/**
 * This component is used for handling our create new website popup form
 * @see SitePage
 */
class Popup extends Component {

    /**
     * Constructor handles initializing all properties for the component
     * @param props inherited parent component properties
     */
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        };
        backend.f = props.handleDashClick;
    }

    /**
     * This is used to handle the create new website when the new website form is submitted
     * @param event: Submission button pressed
     */
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title !== "") {
            var letters = /^[0-9a-zA-Z\s\_\-]+$/;
            if(this.state.title.match(letters)){           
                let web = AjaxCall(
                    {
                        function: "createWebsite",
                        title: this.state.title,
                        accountId: sessionStorage.getItem("id"),
                        description: this.state.description,
                    },
                    function (response) {
                        if(response.toString().includes("duplicate")){
                            alert("That website name already exists!");
                        } else if (!response.toString().includes("false")) {
                            console.log(response);
                            let responseArray = JSON.parse(response.split('php-cgi')[1].trim());
                            console.log(responseArray);
                            let websiteId = responseArray.id;
                            console.log(websiteId);
                            backend.redirect(websiteId);
                        } else {
                            alert("Website failed to create");
                        }
                    }
                );
                this.props.closePopup();
            } else {
                alert('Please input alphanumeric characters only');
            }
        }
        else {
            alert("Please enter a title for the website!")
        }
    };

    /**
     * This is used to update the state of the component for Email and Password
     * If a user types into the email or password field the state will change
     * @param event
     */
    handleChange = event => {
        event.preventDefault();
        console.log(event);
        console.log(event.target.name);
        console.log(event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    /**
     * This is used to render the react component
     * @returns {*}
     */
    render() {
        return (
            <div className='popup'>
                <Container className='popup_inner' fluid="sm">
                    <Row className='center'><h3>Enter Website data</h3></Row>

                    <Form className="centerBoxItems" onSubmit={this.handleFormSubmit}>
                        <Row>
                            <Col>
                                <Form.Label>Enter Website Title</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    className='site-page-form-input'
                                    type="text"
                                    id="title"
                                    name="title"
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Label>Enter Website Description</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control
                                    className='site-page-form-input'
                                    type="text"
                                    id="description"
                                    name="description"
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Form.Control className='site-page-button' type="submit" value="Create" />
                            </Col>
                            <Col>
                                <Form.Control className="site-page-button cancel-btn" type='button' value="Cancel" onClick={this.props.closePopup} />
                            </Col>
                        </Row>
                    </Form>
                    {/*<button onClick={this.getTitleOfPage}>Add</button>*/}
                </Container>
            </div>
        );
    }
}


/**
 * This component is used for handling our delete website popup form
 * @see SitePage
 */
class PopupDelete extends Component {

    /**
     * Constructor handles initializing all properties for the component
     * @param props inherited parent component properties
     */
    constructor(props) {
        super(props);
        backend.f = this.props.handleHomeClick;
        backend.s = this.props.handleSitePageClick;
    }

    /**
     * This is used to handle the delete website when the deletion form is submitted
     */
    handleDeleteWebsite = () => {
        const state = this;
        AjaxCall({
                function: "deleteWebsite",
                accountId: sessionStorage.getItem("id"),
                websiteId: sessionStorage.getItem("siteId"),
        },
            function (response) {
                console.log(response);
                if (!response.toString().includes("false")) {
                    alert("Website successfully deleted");
                } else {
                    alert("Website failed to delete");
                }
                console.log(sessionStorage.getItem("siteId"));
                backend.redirectDelete();
            }
        );
    };

    /**
     * This is used to render the react component
     * @returns {*}
     */
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                    <h3>Are you sure you want to delete?</h3>
                    <div className="delete-popup-btn-container">
                        <button className="submitnextbutton" onClick={this.handleDeleteWebsite}>Delete</button>
                        <button className="submitnextbutton" onClick={this.props.closePopup}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

/**
 * This component is used for handling our account dashboard
 * This can redirect to Home, Website dashboard
 * @see HomePage
 * @see Dashboard
 */
class SitePage extends Component {

    /**
     * Constructor handles account dashboard restrictions as well as initializing all properties
     * for the component
     * @param props inherited parent component properties
     */
    constructor(props) {
        super(props);

        this.state = {
            userLoggedIn: true,
            showPopup: false,
            showPopupDelete: false
        };
        this.handleLogOut = this.handleLogOut.bind(this);
        this.handleRedirectToAccoutingSettings = this.handleRedirectToAccoutingSettings.bind(this);
        this.handleUpgradePlan = this.handleUpgradePlan.bind(this);

        if (sessionStorage.getItem("siteId") !== null) {
            sessionStorage.removeItem("siteId");
        }
    }

    /**
     * This is used to set up the component when rendered
     * The function will gather account data such as websites and tier
     */
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
            var check = false;
            AjaxCall({ function: 'checkWebsites', subscription: sessionStorage.getItem("tier"), accountId: sessionStorage.getItem("id") },
                function (response) {
                    if (!response.toString().includes("false")) {
                        console.log("Response:", response);
                        check = true;
                        self.setState({
                            tier: check
                        });
                    }
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

    /**
     * This method handles rendering the new website form popup component
     * @see Popup
     */
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    /**
     * This method handles opening an account's website in a new tab
     */
    handleViewWebsite = (info) => {
        console.log(info);
        window.location.assign('../../' + info.replace(" ", "_"));
    };

    /**
     * This method handles redirection to website dashboard for an account's specific website
     */
    handleEditWebsite = (info) => {
        console.log(info);
        sessionStorage.setItem("siteId", info);
        this.props.handleDashClick();
    };

    /**
     * This method handles rendering the delete website form popup component
     * @see PopupDelete
     */
    handleDeleteWebsite = (info) => {
        sessionStorage.setItem("siteId", info);
        this.setState({
            showPopupDelete: !this.state.showPopupDelete
        });
    };


    /**
     * This function returns the top navigation
     */
    TopNav() {
        return (
            <Header transparent style={{ backgroundColor: "#000" }}>
                <Row className='topnav-row'>
                    <Col>
                        <a href='#landing' onClick={this.props.handleHomeClick} className="main-top-home-nav" />
                    </Col>
                    <Col style={{ textAlign: 'right' }}>
                        <button
                            onClick={this.handleLogOut}
                            className={"button button-primary"}
                        >
                            Log Out
                        </button>
                    </Col>
                </Row>
            </Header>
        );
    }

    /**
     * This is used to render the react component
     * @returns {*}
     */
    render() {
        var userLoggedIn = this.state.userLoggedIn;
        return (
            <>
                {this.TopNav()}
                {userLoggedIn ?
                    <div className="SitePage">
                        <Container className="sitepage-jumbotron" fluid >
                            <h1 className="site-page-header">Manage Your Sites</h1>
                        </Container>


                        <div className="Content">
                            <div className="SiteList">
                                {this.state && this.state.siteInfo &&
                                    this.state.siteInfo.map((site, index) =>
                                        <div key={index} className="SiteIcon">
                                            <p style={{ textAlign: "center" }}>{site.name.replace("_", " ")}</p>
                                            <img src={site.image} alt={site.name} />
                                            <p style={{ textAlign: "center" }}>description: {site.description}</p>
                                            <Row>
                                                <Col className="center" xs={12} sm={6}>
                                                    <Button className="sitepage-button" onClick={() => this.handleEditWebsite(site.id)} value="Edit">Edit</Button>
                                                </Col>
                                                {/* <Col className="center" xs={12} sm={4}>
                                                    <Button className="sitepage-button" onClick={() => this.handleViewWebsite(site.path)} value="View">View</Button>
                                                </Col> */}

                                                <Col className="center" xs={12} sm={6}>
                                                    <Button className="sitepage-button-delete" onClick={() => this.handleDeleteWebsite(site.id)} value="Delete">Delete</Button>
                                                    {this.state.showPopupDelete ?
                                                        <PopupDelete
                                                            handleHomeClick={this.props.handleHomeClick}
                                                            handleSitePageClick={this.props.handleSitePageClick}
                                                            closePopup={this.handleDeleteWebsite.bind(this)}
                                                        />
                                                        : null
                                                    }
                                                </Col>
                                            </Row>
                                        </div>
                                    )
                                }
                                {this.state.tier ?
                                    <div>
                                        <Button className="new-site-btn" onClick={this.togglePopup.bind(this)} value="New">New</Button>
                                        {this.state.showPopup ?
                                            <Popup
                                                text='Enter the title of the new page.'
                                                handleDashClick={this.props.handleDashClick}
                                                closePopup={this.togglePopup.bind(this)}
                                            />
                                            : null
                                        }
                                    </div>
                                    : null
                                }
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
export default SitePage;