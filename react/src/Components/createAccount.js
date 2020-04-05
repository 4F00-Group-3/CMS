import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import "./css.css";
import AjaxCall from "../ajax.js";

class createAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pw: "",
      fn: "",
      ln: ""
    };
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
      <div>
        <Container maxWidth="sm">
          <Card>
            <div>
              <div className="submitformdiv">
                <h2>Create An Account</h2>
                <p>Please enter the security code emailed to you.</p>
                <form
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
                </form>

                <br></br>
              </div>
            </div>
          </Card>
        </Container>
      </div>
    );
  }
}

export default createAccount;
