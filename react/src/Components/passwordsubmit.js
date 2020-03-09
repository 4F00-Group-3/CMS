import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";

class passwordsubmit extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="sm" className="signupProcess">
          <Card>
            <div className="boxPadding">
              <div class="submitformdiv">
                <h2>Step 3</h2>

                <p>
                  Please enter a new password that is secure that you will
                  remember.
                </p>
                <form>
                  <label for="password">Password</label>
                  <br></br>
                  <input
                    type="text"
                    id="password"
                    code="password"
                    class="emailaddressbar"
                  />
                  <br></br>
                  <br></br>
                  <input type="submit" value="Next" class="submitnextbutton" />
                </form>
              </div>
            </div>
          </Card>
        </Container>
      </div>
    );
  }
}

export default passwordsubmit;
