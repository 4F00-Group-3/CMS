import React, { Component } from "react";

class loginpage extends Component {
  render() {
    return (
      <div>
        <h2 style={{ textalign: "center" }}>Login To Your Account</h2>

        <form style={{ padding: "5%" }}>
          <label for="email">Username</label>
          <br></br>
          <input
            type="text"
            id="email"
            emailaddr="email"
            class="emailaddressbar"
          />
          <br></br>

          <label for="email">Password</label>
          <br></br>
          <input type="text" id="pw" pass="pw" class="emailaddressbar" />
          <br></br>

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
          style={{ color: "grey", textdecoration: "none", float: "right" }}
        >
          Create Account
        </a>
      </div>
    );
  }
}

export default loginpage;
