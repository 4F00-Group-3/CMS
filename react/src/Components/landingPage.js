import React, { Component } from "react";
import {
  Grid,
  Cell,
  Button,
  Card,
  CardTitle,
  CardActions,
} from "react-mdl";

class landingPage extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={12}>
            <h2 className="home-page-title">
              Proin placerat finibus porttitor mauris eu malesuada.
            </h2>
            <h4 className="home-page-subtitle">
              Proin placerat finibus porttitor mauris eu malesuada.
            </h4>
            <div style={{ textAlign: "center", paddingBottom: "270px" }}>
              <Button raised ripple primary>
                Get Started
              </Button>
            </div>
          </Cell>
        </Grid>
        <div style={{ background: "white" }}>
          <section id="faq-page">
            <h2 className="faq-page">FAQ</h2>
          </section>
          <Grid>
            <Cell col={12}>
              {/* Row 1 */}
              <div className="faq-grid" style={{ paddingBottom: "30px" }}>
                {/* Card 1 */}
                <Card
                  style={{
                    width: "256px",
                    height: "256px",
                    background: "skyblue",
                    margin: "auto"
                  }}
                  shadow={0}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
                {/* Card 2 */}
                <Card
                  style={{
                    width: "256px",
                    height: "256px",
                    background: "skyblue",
                    margin: "auto"
                  }}
                  shadow={0}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
                {/* Card 3 */}
                <Card
                  style={{
                    width: "256px",
                    height: "256px",
                    background: "skyblue",
                    margin: "auto"
                  }}
                  shadow={0}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
              </div>
              <span> </span>

              {/* Row 2 */}
              <div className="faq-grid">
                {/* Card 1 */}
                <Card
                  style={{
                    width: "256px",
                    height: "256px",
                    background: "skyblue",
                    margin: "auto"
                  }}
                  shadow={0}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
                {/* Card 2 */}
                <Card
                  style={{
                    width: "256px",
                    height: "256px",
                    background: "skyblue",
                    margin: "auto"
                  }}
                  shadow={0}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
                {/* Card 3 */}
                <Card
                  style={{
                    width: "256px",
                    height: "256px",
                    background: "skyblue",
                    margin: "auto"
                  }}
                  shadow={0}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
              </div>
            </Cell>
          </Grid>
        </div>
        <div style={{ background: "white" }}>
          <section id="pl-pr"></section>
          <h2 className="faq-page">Plans and Pricing</h2>
          <Grid>
            <Cell col={12}>
              {/* Row 1 */}
              <div className="faq-grid">
                {/* Card 1 */}
                <Card
                  style={{
                    width: "256px",
                    height: "256px",
                    background: "skyblue",
                    margin: "auto"
                  }}
                  shadow={0}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
                {/* Card 2 */}
                <Card
                  style={{
                    width: "256px",
                    height: "256px",
                    background: "skyblue",
                    margin: "auto"
                  }}
                  shadow={0}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
                {/* Card 3 */}
                <Card
                  style={{
                    width: "256px",
                    height: "256px",
                    background: "skyblue",
                    margin: "auto"
                  }}
                  shadow={0}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default landingPage;
