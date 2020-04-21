import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import "./LandingPage.css";

class securityCode extends Component {
  render() {
    return (
      <div>
        <div className="centreBoxOnPage">
          <Container maxWidth="sm">
            <Card>
              <div>
                <div className="submitformdiv">
                  <h2>Verifcation Code</h2>
                  <p>Please enter the security code we emailed you.</p>
                  <form className="centerBoxItems">
                    <label for="securitycode">Security Code</label>
                    <br></br>
                    <input
                      type="text"
                      id="securitycode"
                      code="securitycode"
                      class="emailaddressbar"
                    />
                    <br></br>
                    <br></br>
                    <input
                      type="submit"
                      value="Next"
                      class="submitnextbutton"
                    />
                  </form>

                  <br></br>
                </div>
              </div>
            </Card>
          </Container>
        </div>
      </div>
    );
  }
}

export default securityCode;
