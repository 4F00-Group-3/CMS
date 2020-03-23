import React, { Component } from "react";
import {
  Grid,
  Cell,
  Button,
  Card,
  CardTitle,
  CardActions,
  Content,
  Header,
  Navigation
} from "react-mdl";
import { Link } from "react-router-dom";

class landingPage extends Component {
  render() {
    return (
      <div>
        <section ref={this.props.scrollDiv} id="faq-page">
          <h1 className="home-page-title">CMS</h1>
        </section>
        <Grid>
          <Cell col={12}>
            <h2 className="home-page-title">
              Proin placerat finibus porttitor mauris eu malesuada.
            </h2>
            <h4 className="home-page-subtitle">
              Proin placerat finibus porttitor mauris eu malesuada.
            </h4>
            <div style={{ textAlign: "center" }}>
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
          <br />
          <br />
          <br />
          <h1 className="faq-page">
            Find a plan that fits perfectly <br />
            for your business!
          </h1>
          <br />

          <Grid>
            <Cell col={12}>
              {/* Row 1 */}
              <div className="faq-grid">
                {/* Card 1 */}
                <Card
                  style={{
                    width: "256px",
                    height: "256px",
                    background: "url(/FirstPlanSquare.jpg)",
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
                    background: "url(/SecondPlanSquare.jpg)",
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
                    background: "url(/ThirdPlanSquare.jpg)",
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
