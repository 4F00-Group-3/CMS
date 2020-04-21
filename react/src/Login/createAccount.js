import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import AjaxCall from "../ajax.js";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Jumbotron } from "react-bootstrap";
import '../css/LoginPage.css';
import "../css/LandingPage.css";
import CreateAccountBackend from "./backend/CreateAccountBackend";
let backend = new CreateAccountBackend();

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pw: "",
      fn: "",
      ln: ""
    };
    backend.f = this.props.handleGetStartedClick;
    if (sessionStorage.getItem('id') !== null) {
      this.props.handleSitePageClick();
    }
  }

  handleCreateAccountSubmit = event => {
    event.preventDefault();
    console.log()
    AjaxCall(
      {
        function: "createAccount",
        email: this.state.email,
        password: this.state.pw,
        first_name: this.state.fn,
        last_name: this.state.ln
      },
      function(response) {
        console.log(response);
        if (!response.toString().includes("false")) {
          let responseArray = JSON.parse(response.split('php-cgi')[1].trim());
          console.log(responseArray);
          let accountId = responseArray.id;
          console.log(accountId);
          backend.redirect(accountId);
        }else{
          alert("Unable to create account. Email already in use.")
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
      <Jumbotron className='login-container'>
        <Container maxWidth="sm">
          <Card className='create-account-card'>
            <h2>Create An Account</h2>
            <Form
              className="centerBoxItems"
              onSubmit={this.handleCreateAccountSubmit}
            >
              <Row>
                <Col>
                  <Form.Label htmlFor="fn">First Name</Form.Label>
                </Col>
                <Col>

                  <input
                    type="text"
                    id="email"
                    emailaddr="email"
                    className="create-account-form-input"
                    name="fn"
                    onChange={(event) => {this.handleChange(event)}}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label htmlFor="ln">Last Name</Form.Label>
                </Col>
                <Col>
                  <input
                    type="text"
                    id="email"
                    emailaddr="email"
                    className="create-account-form-input"
                    name="ln"
                    onChange={(event) => {this.handleChange(event)}}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label for="email">Email</Form.Label></Col>
                <Col>
                  <input
                    type="text"
                    id="email"
                    emailaddr="email"
                    className="create-account-form-input"
                    name="email"
                    onChange={(event) => {this.handleChange(event)}}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label for="pw">Password</Form.Label>
                </Col>
                <Col>

                  <input
                    type="password"
                    id="pw"
                    pass="pw"
                    className="create-account-form-input"
                    name="pw"
                    onChange={(event) => {this.handleChange(event)}}
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <label for="pw2">Re-Enter Password</label>
                </Col>
                <Col>
                  <input
                    type="password"
                    id="pw"
                    pass2="pw2"
                    className="create-account-form-input"
                  />
                </Col>
              </Row>
              <Row className='center'>
                <input type="submit" value="Next" class="submitnextbutton" />
              </Row>
            </Form>

            <Row>
              <Col>
                <input
                  className='input-as-anchor'
                  type="button"
                  value="Back"
                  onClick={this.props.back_onClick} />
              </Col>
              <Col>
              {/* empty to align left */}
              </Col>
            </Row>
          </Card>
        </Container>
      </Jumbotron>
    );
  } 
}
export default CreateAccount;
