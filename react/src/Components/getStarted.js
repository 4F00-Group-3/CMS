import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  FooterSection,
  Footer,
  FooterLinkList,
  Layout,
} from "react-mdl";
import Payments from "./payments";
import NewWindow from "react-new-window";

class getStarted extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={12}>
            {/* Row 1 */}
            <div className="started-grid">
              <Card
                shadow={0}
                style={{ width: "320px", height: "550px", margin: "auto" }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff",
                    background: "url(./imagesFolder/FirstPlan.jpg)",
                  }}
                ></CardTitle>
                <CardText>Get started with building web applications!</CardText>
                <CardActions border>
                  <Payments amount={10}
                            handleSitePageClick = {this.props.handleSitePageClick}>Pay</Payments>
                  <a href="#" onClick={this.props.signUp_click}>
                    Sign up
                  </a>
                </CardActions>
              </Card>

              <Card
                shadow={0}
                style={{ width: "320px", height: "550px", margin: "auto" }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff",
                    background: "url(./imagesFolder/SecondPlan.jpg)",
                  }}
                ></CardTitle>
                <CardText>
                  Take your business to the next level with premium features!
                </CardText>
                <CardActions border>
                  <Payments amount={20}
                            handleSitePageClick = {this.props.handleSitePageClick}>Pay</Payments>
                  <a href="#" onClick={this.props.signUp_click}>
                    Sign up
                  </a>
                </CardActions>
              </Card>

              <Card
                shadow={0}
                style={{ width: "320px", height: "550px", margin: "auto" }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff",
                    background: "url(./imagesFolder/ThirdPlan.jpg)",
                  }}
                ></CardTitle>
                <CardText>
                  Get the necessary tools to provide a great web experience for
                  your customers!
                </CardText>
                <CardActions border>
                  <Payments amount={30}
                            handleSitePageClick = {this.props.handleSitePageClick}>Pay</Payments>
                  <a href="#" onClick={this.props.signUp_click}>
                    Sign up
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>
        </Grid>
        <p className="creds">
          Use our service for free for the first month! Use the following PayPal credentials:
        </p>
        <p className="creds">
          Username: sb-odp9i1081433@personal.example.com Password:
          dJQhG+S9
        </p>
        <Footer
          style={{ bottom: "0", position: "fixed", width: "100%" }}
          size="mini"
        >
          <FooterSection type="left" logo="No">
            <FooterLinkList>
              <a href="#">Help</a>
              <a href="#">Privacy & Terms</a>
            </FooterLinkList>
          </FooterSection>
        </Footer>
      </div>
    );
  }
}

export default getStarted;
