
import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import AjaxCall from "../ajax.js";
import LoginBackend from "./backend/LoginBackend";
import CreateAccount from './createAccount.js';
import '../css/LoginPage.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Jumbotron } from "react-bootstrap";
import ForgotPassword from './ForgotPassword';


import {
  FooterSection,
  Footer,
  FooterLinkList
} from "react-mdl";

//The backend is used for handling page restrictions and redirection
let backend = new LoginBackend();

/**
 * This component is used for handling our account login feature of the website
 * This can redirect to SitePage, ForgotPassword, CreateAccount
 * @see SitePage
 * @see ForgotPassword
 * @see CreateAccount
 */
class LoginPage extends Component {
  /**
   * Constructor handles login restrictions based on if a user is already logged in as well as initializing all properties
   * for the component
   * @param props inherited parent component properties
   */
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pw: "",
      page: "login"
    };
    this.handleFormSubmit.bind(this);
    this.handleChange.bind(this);
    this.createAccountOnclick = this.createAccountOnclick.bind(this);   //make it so can use this.state
    this.forgotPasswordOnclick = this.forgotPasswordOnclick.bind(this);
    backend.f = this.props.handleSitePageClick;
    backend.l = this.props.handleLandingClick;
    backend.g = this.props.handleGetStartedClick;
    console.log(this.props);
    if (sessionStorage.getItem('id') !== null && sessionStorage.getItem('tier') === null) {
      this.props.handleGetStartedClick();
    } else if (sessionStorage.getItem('id') !== null) {
      this.props.handleSitePageClick();
    }


  }

  /**
   * This is used to handle the login functionality through the backend when the login form is submitted
   * @param event Email and Password passed from form
   */
  handleFormSubmit = event => {
    event.preventDefault();
    AjaxCall(
      { function: "login", email: this.state.email, password: this.state.pw },
      function (response) {
        //SUCCESSFUL LOGIN
        if (!response.toString().includes("false")) {
          let responseArray = JSON.parse(response.split('php-cgi')[1].trim());
          console.log(responseArray);
          let accountId = responseArray.accountId;
          let subscription = responseArray.subscription;
          console.log(accountId);
          backend.redirect(accountId, subscription);
        }
        //UNSUCCESSFUL LOGIN
        else {
          alert("Incorrect login credentials. Please try again.")
        }
      }

    );
  };

  /**
   * This is used when a forgotPassword from is submitted to change account password.
   * @param event Email and Password passed from form
   */
  handlePasswordChangeSubmit = event => {
    event.preventDefault();
    AjaxCall(
      { function: "updateAccountPassword", email: this.state.email, password: this.state.pw2 },
      function (response) {
        console.log(response);
        if (!response.toString().includes("false")) {
          backend.redirectNewPass();
        } else {
          alert("Incorrect email. Please try again.")
        }
      }
    );
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
   * This is used to redirect to the createAccount page
   */
  createAccountOnclick() {
    this.setState({ page: "create-account" })
  }

  /**
   * This is used to redirect to the forgotPassword page
   */
  forgotPasswordOnclick() {
    this.setState({ page: "forgot" });
  }

  /**
   * This is used to redirect to the previous page
   */
  back_OnClick = () => {
    this.setState({ page: "login" })
  }

  /**
   * This is used to render the page footer
   */
  Footer() {
    return (
      <div style={{ paddingbottom: "60px" }}>

        <Footer className='login-footer' size="mini">
          <FooterSection type="left" logo="North.">
            <FooterLinkList>
              <a target="_blank" href="https://drive.google.com/open?id=1bModZ1EzBEdGyZltHlMCmiW2o0fjjEmC">Help</a>
              <a target="_blank" href="https://drive.google.com/open?id=1tWE13UlHbMgXlFPAvF59OO0xwQB_wCrt">Privacy Policy</a>
              <a target="_blank" href="https://drive.google.com/open?id=1NtARcUGS2ygw1dfAhPEHjpanxqG8OuH-">Terms & Conditions</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </div>);
  }


  /**
   * This is used to render the react component
   * @returns {*}
   */
  render() {
    if (this.state.page === "forgot") {
      return (
        <>
          <ForgotPassword
            handlePasswordChangeSubmit={this.handlePasswordChangeSubmit}
            handleChange={this.handleChange}
            back_onClick={this.back_OnClick}
            handleHomeClick={this.props.handleHomeClick}
          />
          {this.Footer()}
        </>
      );
    }
    else if (this.state.page === "create-account") {
      return (
        <>
          <CreateAccount
            back_onClick={this.back_OnClick}
            handleFormSubmit={this.handleFormSubmit}
            handleChange={this.handleChange}
            handleGetStartedClick={this.props.handleGetStartedClick}
          />
          {this.Footer()}
        </>
      );
    }
    else {
      return (
        <>
          <Jumbotron className='login-container'>
            <Container className='card-container' maxWidth="sm">
              <Card className='login-card'>
                <h2 className='login-page-heading'>Login To Your Account</h2>

                <Form className="centerBoxItems" onSubmit={this.handleFormSubmit}>
                  <Row className='center'>
                    <label htmlFor="email">Email</label>
                  </Row>
                  <Row className='center'>
                    <input
                      className='form-input'
                      type="email"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Row>
                  <Row className='center'>
                    <label htmlFor="pw">Password</label>
                  </Row>
                  <Row className='center'>
                    <input
                      className='form-input'
                      type="password"
                      id="pw"
                      name="pw"
                      value={this.state.pw}
                      onChange={this.handleChange}
                    />
                  </Row>
                  <Row className='center'>
                    <input type="submit" value="Login" className="submitnextbutton" />
                  </Row>
                </Form>
                <Row>
                  <Col>
                    <input
                      className='input-as-anchor'
                      type="button"
                      value="Create Account"
                      onClick={this.createAccountOnclick} />
                  </Col>
                  <Col>
                    <input
                      className='input-as-anchor'
                      type="button"
                      style={{ float: "right" }}
                      value="Forgot Password"
                      onClick={this.forgotPasswordOnclick} />
                  </Col>

                </Row>
              </Card>
            </Container>
          </Jumbotron>
          {this.Footer()}
        </>
      )
    }
  }
}

export default LoginPage;