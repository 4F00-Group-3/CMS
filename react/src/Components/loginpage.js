import React, { Component, createRef } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import "./css.css";
import AjaxCall from "../ajax.js";

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.createAccountOnclick = this.createAccountOnclick.bind(this);   //make it so can use this.state
    this.forgotPasswordClick1 = this.forgotPasswordClick1.bind(this);
    this.forgotPasswordClick2 = this.forgotPasswordClick2.bind(this);
    this.forgotPasswordClick3 = this.forgotPasswordClick3.bind(this);
    
    this.state = {
      email: "",
      pw: "",
      fn: "",
      ln: "",
      code: "",
      newpw: "",
      page: "Login",
    };

    this.scrollDiv = createRef();

  }


  returnButtonCSS = (button) => {
    if (button === this.state.activeButton) {
      return "btn btn-primary active";
    } else {
      return "btn btn-primary";
    }
  };


  createAccountOnclick(){
    this.setState({ page: "create" });            //create account
  }

  forgotPasswordClick1(){
    this.setState({ page: "forgot_email" });      //ask for email for forgot password page
  }

  forgotPasswordClick2(){
    this.setState({ page: "forgot_newpassword"})       //ask for email verification code for forgot password page
  }

  forgotPasswordClick3(){
    this.setState({ page: "Login"})              //go back to login page
  }

  handleLoginFormSubmit = event => {
    event.preventDefault();
    AjaxCall(
      { function: "Login", email: this.state.email, password: this.state.pw },
      function(response) {
        if (!response.toString().includes("false")) {
          let accountId = response.toString().indexOf(" ");
          sessionStorage.setItem("id", response.toString().slice(accountId));
        }
        console.log(response.toString());
      }
    );
    if (sessionStorage.length === 1) {
      this.props.handleDashClick();
    }
  };

  handleCreateFormSubmit = event => {
    event.preventDefault();
      AjaxCall(
        {
          function: "createAccount",
          code: this.state.code
        },
        function(response) {
          console.clear();
          console.log(response);
        }
      );
    }

    handleVerifyFormSubmit = event => {
      event.preventDefault();
        AjaxCall(
          {
            function: "verify",
            email: this.state.email,
          },
          function(response) {
            console.clear();
            console.log(response);
          }
        );
      }

      handleEmailFormSubmit = event => {
        event.preventDefault();
          AjaxCall(
            {
              function: "forgotEmail",
              email: this.state.email,
            },
            function(response) {
              console.clear();
              console.log(response);
            }
          );
        }

        handleNewPasswordFormSubmit = event => {
          event.preventDefault();
            AjaxCall(
              {
                function: "newPW",
                newpw: this.state.newpw,
              },
              function(response) {
                console.clear();
                console.log(response);
              }
            );
          }
  

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

    const loginpg = (
      <div>
        <Container maxWidth="sm" style={{ backgroundcolor: "black" }}>
          <Card>
            <div style={{ padding: "20px" }}>
              <h2 style={{ textalign: "center" }}>Login To Your Account</h2>

              <form className="centerBoxItems" onSubmit={this.handleLoginFormSubmit}>
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

              <input type="button" value="Create Account" onClick={this.createAccountOnclick} />
              <input type="button" style={{float:"right"}} value="Forgot Password" onClick={this.forgotPasswordClick1} />
            </div>
          </Card>
        </Container>
      </div>
    );

    const createaccountpg = (
      <div>
      <Container maxWidth="sm">
        <Card>
          <div>
            <div className="submitformdiv">
              <h2>Create An Account</h2>
              <p>Please enter the security code emailed to you.</p>
              <form
                className="centerBoxItems"
                onSubmit={this.handleCreateFormSubmit}
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
                <input type="submit" value="Submit" onClick={this.forgotPasswordClick3} class="submitnextbutton" />
              </form>

              <br></br>
            </div>
          </div>
        </Card>
      </Container>
    </div>
    );

    /*ASK FOR EMAIL*/
    const forgot_emailpg = (
    <div>
      <Container maxWidth="sm" style={{ backgroundcolor: "black" }}>
        <Card>
          <div style={{ padding: "20px" }}>
            <h2 style={{ textalign: "center" }}>Enter your email address</h2>

            <form className="centerBoxItems" onSubmit={this.handleEmailFormSubmit}>
              <label for="email">Email</label>
              <br></br>
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <br />
              <input type="submit" value="Next" onClick={this.forgotPasswordClick2} class="submitnextbutton" />
            </form>

            
          </div>
        </Card>
      </Container>
    </div>
    );

    /*ASK FOR PASSWORD*/
    const forgot_passwordpg = (
    <div>
      <Container maxWidth="sm" style={{ backgroundcolor: "black" }}>
        <Card>
          <div style={{ padding: "20px" }}>
            <h2 style={{ textalign: "center" }}>Please enter a new password that is secure</h2>

            <form className="centerBoxItems" onSubmit={this.handleNewPasswordFormSubmit}>
              <label for="newpw">New Password</label>
              <br></br>
              <input
                type="text"
                id="newpw"
                name="newpw"
                value={this.state.newpw}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <br />
              <input type="submit" value="Submit" onClick={this.forgotPasswordClick3} class="submitnextbutton" />
            </form>

            
          </div>
        </Card>
      </Container>
    </div>
    );

    if( this.state.page == "create" ){
      return(createaccountpg)
    }
    else if ( this.state.page == "forgot_email" ){
      return(forgot_emailpg)   //ask for email
    }
    else if ( this.state.page == "forgot_newpassword" ){
      return(forgot_passwordpg)   //ask for new password
    }
    else{
      return(loginpg)
    }

    
  }
}

export default LoginPage;
