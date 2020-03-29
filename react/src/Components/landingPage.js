import React, { Component } from "react";
import "./css.css";
import {
  Grid,
  Cell,
  Button,
  Card,
  CardTitle,
  CardActions,
  FooterSection,
  Footer,
  FooterLinkList
} from "react-mdl";


class landingPage extends Component {
  render() {
    return (
      <div>
        <section ref={this.props.scrollDiv} id="faq-page">
          <h1 className="home-page-title">Group 3 - CMS</h1>
        </section>
        <Grid>
          <Cell col={12}>
            <h2 className="home-page-title">
              Proin placerat finibus porttitor mauris eu malesuada.
            </h2>
            <h4 className="home-page-subtitle">
              Proin placerat finibus porttitor mauris eu malesuada.
            </h4>
            <br />
            <div style={{ textAlign: "center" }}>
              <Button raised ripple primary>
                Get Started
              </Button>
            </div>
          </Cell>
        </Grid>
        <div style={{ background: "white" }} id="faqsec">
          <section ref={this.props.scrollDiv} id="faq-page">
            <h2 className="faq-page">FAQ</h2>
          </section>

          <Grid
            style={{
              background: "white"
            }}
          >
            <Cell col={12}>
              {/* Row 1 */}
              <div className="faq-grid" style={{ paddingBottom: "30px" }}>
                {/* Card 1 */}
                <Card
                  style={{
                    width: "256px",
                    height: "256px",
                    background: "url(/imagesFolder/FAQ1.jpg)",
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
                    background: "url(/imagesFolder/FAQ2b.jpg)",
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
                    background: "url(/imagesFolder/FAQ3.jpg)",
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
                    background: "url(/imagesFolder/FAQ4b.jpg)",
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
                    background: "url(/imagesFolder/FAQ5.jpg)",
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
                    background: "url(/imagesFolder/FAQ6b.jpg)",
                    margin: "auto"
                  }}
                  shadow={0}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
              </div>
              <span> </span>
              
              {/* Row 3 */}
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
            </Cell>
          </Grid>
        </div>
        <div style={{ background: "white" }} id = "planspricing">
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
                    background: "url(/imagesFolder/FirstPlanSquare.jpg)",
                    margin: "auto"
                  }}
                  shadow={2}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
                {/* Card 2 */}
                <Card
                  style={{
                    width: "256px",
                    height: "256px",
                    background: "url(/imagesFolder/SecondPlanSquare.jpg)",
                    margin: "auto"
                  }}
                  shadow={2}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
                {/* Card 3 */}
                <Card
                  style={{
                    width: "256px",
                    height: "256px",
                    background: "url(/imagesFolder/ThirdPlanSquare.jpg)",
                    margin: "auto"
                  }}
                  shadow={2}
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
        <div style={{ paddingbottom: "60px" }}>
          <Footer size="mini">
            <FooterSection type="left" logo="NO.">
              <FooterLinkList>
                <a href="#">Help</a>
                <a href="#">Privacy & Terms</a>
              </FooterLinkList>
            </FooterSection>
          </Footer>
        </div>
      </div>
    );
  }
}

export default landingPage;
