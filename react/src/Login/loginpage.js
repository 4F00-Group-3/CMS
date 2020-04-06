import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import AjaxCall from "../ajax.js";
import LoginBackend from "./backend/LoginBackend";
import '../css/LoginPage.css'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import { Button } from 'react-bootstrap';

let backend = new LoginBackend();

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pw: ""
    };
    this.handleFormSubmit.bind(this);
    this.handleChange.bind(this);
    backend.f = props.handleSitePageClick;
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
          // LOGIN FAILED DISPLAY ERROR MSG

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

  render() {
    return (
      <Container maxWidth="sm">
        <Card className='login-card'>
          <h2 className='login-page-heading' style={{ textalign: "center" }}>Login To Your Account</h2>

          <Form className="centerBoxItems" onSubmit={this.handleFormSubmit}>
            <Row className='center'> <label htmlFor="email">Username</label></Row>
            <Row className='center'>
              <input
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
                type="password"
                id="pw"
                name="pw"
                value={this.state.pw}
                onChange={this.handleChange}
              />
            </Row>
            <Row className='center'>
              <Button type="submit" value="Login" className="submitnextbutton">Login</Button>
            </Row>
          </Form>


          <a
            href="forgot-password.html"
            style={{ color: "grey", textdecoration: "none" }}
          >
            Forgot Password
              </a>
          <a
            href="create-account.html"
            style={{
              color: "grey",
              textdecoration: "none",
              float: "right"
            }}
          >
            Create Account
              </a>
        </Card>
      </Container>
    );
  }
}

export default LoginPage;
