import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import "./css.css";

class createAccount extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <Card>
            <div>
              <div className="submitformdiv">
                <h2>Create An Account</h2>
                <p>Please enter the security code we emailed you.</p>
                <form className="centerBoxItems">
                  <label for="email">Email</label>
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
                  <input
                    type="text"
                    id="pw"
                    pass="pw"
                    class="emailaddressbar"
                  />
                  <br></br>

                  <label for="pw2">Re-Enter Password</label>
                  <br></br>
                  <input
                    type="text"
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
