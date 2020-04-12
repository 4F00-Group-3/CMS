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
    backend.f = props.handleGetStartedClick;
    if (sessionStorage.getItem('id') !== null) {
      props.handleSitePageClick();
    }

    // AjaxCall(
    //   { function: "currentUser", accountId:sessionStorage.getItem('id') || 0 },
    //   function(response) {
    //     if (!response.toString().includes("false")) {
    //       let user = JSON.parse(response.split('php-cgi')[1].trim());
    //       let account = user.accountId; 
    //       console.log('user data returned:', user);
    //     } else {
    //       console.log('no user logged in');
    //     }
    //   }
    // );

    // AjaxCall(
    //   { function: "updateUser", subscription: 3 /* Set the sub level here */, accountId:sessionStorage.getItem('id') || 0 },
    //   function(response) {
    //     //whether update was successful or not
    //     if (!response.toString().includes("false")) {
    //       console.log('user data updated');
    //     } else {
    //       console.log('user data update failed');
    //     }
    //   }
    // );
  }

  handleFormSubmit = event => {
    event.preventDefault();

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
              onSubmit={this.props.handleFormSubmit}
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
                    onChange={this.props.handleChange}
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
                    onChange={this.props.handleChange}
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
                    onChange={this.props.handleChange}
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
                    onChange={this.props.handleChange}
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
