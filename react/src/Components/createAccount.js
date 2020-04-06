import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import AjaxCall from "../ajax.js";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Jumbotron } from "react-bootstrap";
import '../css/LoginPage.css';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pw: "",
      fn: "",
      ln: ""
    };

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
      function (response) {
        console.clear();
        console.log(response);
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
        <Container className='card-container' maxWidth="sm">
          <Card>
                <h2>Create An Account</h2>
                <Form
                  className="centerBoxItems"
                  onSubmit={this.handleFormSubmit}
                >
                  <label htmlFor="fn">First Name</label>
                  <br></br>
                  <input
                    type="text"
                    id="email"
                    emailaddr="email"
                    className="emailaddressbar"
                    name="fn"
                    onChange={this.handleChange}
                  />

                  <label htmlFor="ln">Last Name</label>
                  <br></br>
                  <input
                    type="text"
                    id="email"
                    emailaddr="email"
                    className="emailaddressbar"
                    name="ln"
                    onChange={this.handleChange}
                  />

                  <label for="email">Email</label>
                  <br></br>
                  <input
                    type="text"
                    id="email"
                    emailaddr="email"
                    class="emailaddressbar"
                    name="email"
                    onChange={this.handleChange}
                  />
                  <br></br>

                  <label for="pw">Password</label>
                  <br></br>
                  <input
                    type="password"
                    id="pw"
                    pass="pw"
                    class="emailaddressbar"
                    name="pw"
                    onChange={this.handleChange}
                  />
                  <br></br>

                  <label for="pw2">Re-Enter Password</label>
                  <br></br>
                  <input
                    type="password"
                    id="pw"
                    pass2="pw2"
                    class="emailaddressbar"
                  />
                  <br></br>
                  <br></br>
                  <input type="submit" value="Next" class="submitnextbutton" />
                </Form>
          </Card>
        </Container>
      </Jumbotron>
    );
  }
}

export default CreateAccount;
