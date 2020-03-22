import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { FooterSection, Footer, FooterLinkList } from "react-mdl";
import "./css.css";

class submitemail extends Component {
  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <Card>
            <div>
              <div className="submitformdiv">
                <h2>Step 1</h2>
                <p>Please enter your email.</p>

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
                  <br></br>
                  <input
                    type="submit"
                    value="Next"
                    className="submitnextbutton"
                  />
                  <br></br>
                  <br></br>
                </form>
              </div>
            </div>
          </Card>
        </Container>
      </div>
    );
  }
}

export default submitemail;
