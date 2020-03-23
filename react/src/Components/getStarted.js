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
                    background: "url(/FirstPlan.jpg)"
                  }}
                ></CardTitle>
                <CardText>Get started with building web applications!</CardText>
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
                    background: "url(/SecondPlan.jpg)"
                  }}
                ></CardTitle>
                <CardText>
                  Take your business to the next level with premium features!
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
                    background: "url(/ThirdPlan.jpg)"
                  }}
                ></CardTitle>
                <CardText>
                  Get the necessary tools to provide a great web experience for
                  your customers!
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
