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
} from "react-mdl";
import Payments from "./payments";

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
                  <Payments amount={10}>Pay</Payments>
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
                  <Payments amount={20}>Pay</Payments>
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
                  <Payments amount={30}>Pay</Payments>
                  <a href="#" onClick={this.props.signUp_click}>
                    Sign up
                  </a>
                </CardActions>
              </Card>
            </div>
          </Cell>
        </Grid>
        <Footer size="mini">
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
