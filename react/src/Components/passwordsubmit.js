import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import "./LandingPage.css";

/**
 * This component is used for rendering the passwordSubmit form for forgotPassword
 * @see ForgotPassword
 */
class passwordsubmit extends Component {


  /**
   * This is used to render the react component
   * @returns {*}
   */
  render() {
    return (
      <div>
        <div className="centreBoxOnPage">
          <Container maxWidth="sm">
            <Card>
              <div>
                <div class="submitformdiv">
                  <h2>Step 3</h2>
                  <p>
                    Please enter a new password that is secure that you will
                    remember.
                  </p>
                  <form className="centerBoxItems">
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
                    <input
                      type="submit"
                      value="Next"
                      className="submitnextbutton"
                    />
                  </form>
                </div>
              </div>
            </Card>
          </Container>
        </div>
      </div>
    );
  }
}

export default passwordsubmit;
