import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import "../Components/css.css";
import AjaxCall from "../ajax.js";
import LoginBackend from "./backend/LoginBackend";
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
        function(response) {
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
    //
    // if (sessionStorage.length === 1) {
    //   this.props.handleDashClick();
    // }
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
      <div>
        <Container maxWidth="sm" style={{ backgroundcolor: "black" }}>
          <Card>
            <div style={{ padding: "20px" }}>
              <h2 style={{ textalign: "center" }}>Login To Your Account</h2>

              <form className="centerBoxItems" onSubmit={this.handleFormSubmit}>
                <label for="email">Username</label>
                <br></br>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <br></br>
                <label for="email">Password</label>
                <br></br>
                <input
                  type="password"
                  id="pw"
                  name="pw"
                  value={this.state.pw}
                  onChange={this.handleChange}
                />
                <br />
                <br />
                <br />
                <input type="submit" value="Login" class="submitnextbutton" />
              </form>

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
            </div>
          </Card>
        </Container>
      </div>
    );
  }
}

export default LoginPage;
