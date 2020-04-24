
import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import AjaxCall from "../ajax.js";
import LoginBackend from "./backend/LoginBackend";
import CreateAccount from './CreateAccount.js';
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

let backend = new LoginBackend();


class LoginPage extends Component {
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

  handleFormSubmit = event => {
    event.preventDefault();
    AjaxCall(
      { function: "login", email: this.state.email, password: this.state.pw },
      function (response) {
        if (!response.toString().includes("false")) {
          let responseArray = JSON.parse(response.split('php-cgi')[1].trim());
          console.log(responseArray);
          let accountId = responseArray.accountId;
          let subscription = responseArray.subscription;
          console.log(accountId);
          backend.redirect(accountId, subscription);
          // REDIRECT TO ANOTHER PAGE AFTER THIS
        } else {
          //TODO::LOGIN FAILED DISPLAY ERROR MSG
          alert("Incorrect login credentials. Please try again.")
        }
      }

    );
  };

  handlePasswordChangeSubmit = event => {
    event.preventDefault();
    AjaxCall(
      { function: "updateAccountPassword", email: this.state.email, password: this.state.pw },
      function (response) {
        console.log(response);
        if (!response.toString().includes("false")) {
          backend.redirectNewPass();
        } else {
          //TODO::LOGIN FAILED DISPLAY ERROR MSG
          alert("Incorrect email. Please try again.")
        }
      }
    );
  };

  handleChange = event => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  createAccountOnclick() {
    this.setState({ page: "create-account" })
  }

  forgotPasswordOnclick() {
    this.setState({ page: "forgot" });
  }

  back_OnClick = () => {
    this.setState({ page: "login" })
  }

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
      // login page below 
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