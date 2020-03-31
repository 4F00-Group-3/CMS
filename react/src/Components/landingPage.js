import React, { Component } from "react";
import "./LandingPage.css";
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
import GetStarted from "./getStarted";

class landingPage extends Component {
  getStarted_OnClick = () => {
    this.setState({
      page: <GetStarted signUp_click={this.signUp_OnClick} />,
      activeButton: "get-started"
    });
  };

  render() {
    return (
      <div>
        <div className="center-logo">
          <section ref={this.props.scrollHome} id="home">
            <img src="/imagesFolder/logo.png" className="logo-size"></img>
          </section>
        </div>
        <Grid>
          <Cell col={12}>
            <h2 className="home-page-title">
              Proin placerat finibus porttitor mauris eu malesuada.
            </h2>
            <h4 className="home-page-subtitle">
              Proin placerat finibus porttitor mauris eu malesuada.
            </h4>
            <br />
            <div className="center-logo">
              <Button raised ripple primary onClick={this.props.getStartedOnClick}>
                Get Started
              </Button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </Cell>
        </Grid>
        <div className="LandingPage-Grid-bg" id="faqsec">
          <br />
          <section ref={this.props.scrollDiv} id="faq-page">
            <h2 className="faq-page">FAQ</h2>
          </section>

          <Grid className="LandingPage-Grid-bg">
            <Cell col={12}>
              {/* Row 1 */}
              <div className="faq-grid" style={{ paddingBottom: "30px" }}>
                {/* Card 1 */}
                <Card className={"LandingPage-Card"}
                  style={{
                    background: "url(./imagesFolder/FAQ1.jpg)",
                  }}
                  shadow={0}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
                {/* Card 2 */}
                <Card className={"LandingPage-Card"}
                  style={{
                    background: "url(./imagesFolder/FAQ2b.jpg)",
                  }}
                  shadow={0}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
                {/* Card 3 */}
                <Card className={"LandingPage-Card"}
                  style={{
                    background: "url(./imagesFolder/FAQ3.jpg)",
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
                <Card className={"LandingPage-Card"}
                  style={{
                    background: "url(./imagesFolder/FAQ4b.jpg)",
                  }}
                  shadow={0}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
                {/* Card 2 */}
                <Card className={"LandingPage-Card"}
                  style={{
                    background: "url(./imagesFolder/FAQ5.jpg)",
                  }}
                  shadow={0}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
                {/* Card 3 */}
                <Card className={"LandingPage-Card"}
                  style={{
                    background: "url(./imagesFolder/FAQ6b.jpg)",
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

        <div style={{ background: "white" }} id="planspricing">
          <br />
          <br />
          <br />
          <section id="pl-pr"></section>
          <h2 className="faq-page">Plans and Pricing</h2>
          <Grid>
            <Cell col={12}>
              {/* Row 1 */}
              <div className="faq-grid">
                {/* Card 1 */}
                <Card className={"LandingPage-Card"}
                  style={{
                    background: "url(./imagesFolder/FirstPlanSquare.jpg)",
                  }}
                  shadow={2}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
                {/* Card 2 */}
                <Card className={"LandingPage-Card"}
                  style={{
                    background: "url(./imagesFolder/SecondPlanSquare.jpg)",
                  }}
                  shadow={2}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
                {/* Card 3 */}
                <Card className={"LandingPage-Card"}
                  style={{
                    background: "url(./imagesFolder/ThirdPlanSquare.jpg)",
                 }}
                  shadow={2}
                >
                  <CardTitle expand />
                  <CardActions className="faq-cards-actions"></CardActions>
                </Card>
              </div>
              <span> </span>
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
