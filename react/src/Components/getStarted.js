import React, { Component } from "react";
import {
  Grid,
  Cell,
  Button,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Content,
  FooterSection,
  Footer,
  FooterLinkList,
  Header,
  Navigation
} from "react-mdl";
import { Link, Route } from "react-router-dom";

class getStarted extends Component {
  render() {
    return (
      <div>
        <Header transparent title="NO." style={{ color: "white" }}>
          <Navigation>
            <Link to="/loginpage">Log In</Link>
            <Link to="/getstarted" style={{ fontWeight: "bold" }}>
              Get Started
            </Link>
            <a href="/#pl-pr">Plans & Pricing</a>
            <a href="/#faq-page">FAQ</a>
          </Navigation>
        </Header>
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
                    background:
                      "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
                  }}
                >
                  Plan 1
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
                  convallis.
                </CardText>
                <CardActions border>
                  <Button colored>Sign Up</Button>
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
                    background:
                      "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
                  }}
                >
                  Plan 2
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
                  convallis.
                </CardText>
                <CardActions border>
                  <Button colored>Sign Up</Button>
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
                    background:
                      "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
                  }}
                >
                  Plan 3
                </CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
                  convallis.
                </CardText>
                <CardActions border>
                  <Button colored>Sign Up</Button>
                </CardActions>
              </Card>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default getStarted;
