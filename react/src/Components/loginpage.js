import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { FooterSection, Footer, FooterLinkList } from "react-mdl";
import "./css.css";

class loginpage extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <Card>
            <div className="boxPadding">
              <h2>Log into your account</h2>

              <form className="centerBoxItems">
                <label for="email">Username:</label>
                <br></br>
                <input
                  type="text"
                  id="email"
                  emailaddr="email"
                  class="emailaddressbar"
                />
                <br></br>
                <br></br>

                <label for="email">Password:</label>
                <br></br>
                <input type="text" id="pw" pass="pw" class="emailaddressbar" />
                <br></br>
                <br></br>
                <br></br>

                <input type="submit" value="Login" class="submitnextbutton" />
              </form>

              <a
                href="submitemail"
                style={{ color: "grey", textdecoration: "none" }}
              >
                Forgot Password
              </a>
              <a
                href="createaccount"
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

export default loginpage;
