
import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import AjaxCall from "../ajax.js";
import LoginBackend from "./backend/LoginBackend";
import CreateAccount from '../Components/CreateAccount.js';
import '../css/LoginPage.css';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Jumbotron } from "react-bootstrap";

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
    backend.f = props.handleSitePageClick;
    backend.l = props.handleHomeClick;
    if (sessionStorage.getItem('id') !== null) {
      props.handleSitePageClick();
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
          console.log(accountId);
          backend.redirect(accountId);
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
          // let responseArray = JSON.parse(response.split('php-cgi')[1].trim());
          // console.log(responseArray);
          // let accountId = responseArray.accountId;
          console.log("WOWZA");
          backend.redirectNewPass();
          // REDIRECT TO ANOTHER PAGE AFTER THIS
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
    this.setState({page: "login"})
  }

  Footer() {
    return (
      <div style={{ paddingbottom: "60px" }}>

        <Footer className='login-footer' size="mini">
          <FooterSection type="left" logo="NO.">
            <FooterLinkList>
              <a href="#">Help</a>
              <a href="#">Privacy & Terms</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </div>);
  }


  render() {
    const loginpg = (
      <>
      <Jumbotron className='login-container'>
        <Container className='card-container' maxWidth="sm">
          <Card className='login-card'>
            <h2 className='login-page-heading'>Login To Your Account</h2>

            <Form className="centerBoxItems" onSubmit={this.handleFormSubmit}>
              <Row className='center'>
                <label htmlFor="email">Username</label>
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
    );
    const forgotpasswordpg = (
      <div>
        <div className="centreBoxOnPage">
          <Container maxWidth="sm">
            <Card>
              <div>
                <div class="submitformdiv">
                  <h2>Forgot Password</h2>
                  <p>
                    Please enter a new password that is secure.
                    </p>
                  <form className="centerBoxItems" onSubmit={this.handlePasswordChangeSubmit}>
                    <label htmlFor="email">Email</label>
                    <br></br>
                    <input
                      type="text"
                      id="email"
                      emailaddr="email"
                      className="emailaddressbar"
                      name="email"
                      onChange={this.handleChange}
                    />
                    <br></br>

                    <label htmlFor="pw">Password</label>
                    <br></br>
                    <input
                      type="password"
                      id="pw"
                      pass="pw"
                      className="emailaddressbar"
                      name="pw"
                      onChange={this.handleChange}
                    />
                    <br></br>

                    <label htmlFor="pw2">Re-Enter Password</label>
                    <br></br>
                    <input
                      type="password"
                      id="pw"
                      pass2="pw2"
                      className="emailaddressbar"
                    />
                    <br></br>
                    <br></br>
                    <input
                      type="submit"
                      value="Next"
                      className="submitnextbutton"
                    />
                  </form>
                </div>
              </div>
            </Card>
          </Container>
        </div>
      </div>
    );

    if (this.state.page === "forgot") {
      return (forgotpasswordpg)
    }
    else if (this.state.page === "create-account") {
      return (
        <>
          <CreateAccount back_onClick={this.back_OnClick} />
          {this.Footer()}
        </>
      );
    }
    else {
      return (loginpg)
    }
  }
}

export default LoginPage;