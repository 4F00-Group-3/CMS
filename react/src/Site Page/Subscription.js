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
import AjaxCall from "../ajax";

class Subscription extends Component {
  /**
   * These methods modify subscription levels in the backend.
   */
  handleUpgradePlan1() {
    // Ajax calls go here to modify subscription to level 1.
    alert("You have changed your plan to Essentials");
    // redirect to go back?
  }
  handleUpgradePlan2() {
    // Ajax calls go here to modify subscription to level 2.
    alert("You have changed your plan to Business");
  }
  handleUpgradePlan3() {
    // Ajax calls go here to modify subscription to level 3.
    alert("You have changed your plan to Enterprise");
  }
  handleCancelPlan() {
    // Ajax calls go here to modify subscription to level 3.
    alert("You have cancelled your plan. You will no longer be billed");
  }
  handleGoBack() {
    // redirect to go back
    alert("Taking you back");
  }
  render() {
    const subscription = sessionStorage.getItem("tier");
    const redirect = this.props.handleSitePageClick;
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
                  {/* The following renders the page based on the user's current subscription */}
                  {subscription == 1 && <h3>This is your current plan</h3>}
                  {subscription == 2 && (
                    /* Ajax call here for downgrading to tier 1 */
                    <p onClick={this.handleUpgradePlan1}>
                      <h3>Click here to downgrade</h3>
                    </p>
                  )}
                  {subscription == 3 && (
                    /* Ajax call here for downgrading to tier 1 */
                    <p onClick={this.handleUpgradePlan1}>
                      <h3>Click here to downgrade</h3>
                    </p>
                  )}
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
                  {subscription == 1 && (
                    /* Ajax call here for upgrading to tier 2 */
                    <p onClick={this.handleUpgradePlan2}>
                      <h3>Click here to upgrade</h3>
                    </p>
                  )}
                  {subscription == 2 && <h3>This is your current plan</h3>}
                  {subscription == 3 && (
                    /* Ajax call here for downgrading to tier 2 */
                    <p onClick={this.handleUpgradePlan2}>
                      <h3>Click here to downgrade</h3>
                    </p>
                  )}
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
                  {subscription == 1 && (
                    /* Ajax call here for upgrading to tier 3 */
                    <p onClick={this.handleUpgradePlan3}>
                      <h3>Click here to upgrade</h3>
                    </p>
                  )}
                  {subscription == 2 && (
                    /* Ajax call here for upgrading to tier 3 */
                    <p onClick={this.handleUpgradePlan3}>
                      <h3>Click here to upgrade</h3>
                    </p>
                  )}
                  {subscription == 3 && <h3>This is your current plan</h3>}
                </CardActions>
              </Card>
            </div>
          </Cell>
        </Grid>
        <div class="container">
          <div class="center">
            {/* Ajax call here for setting tier to 0 (cancel plan). Is this a good idea though?? */}
            {/* Could produce an alert  */}
            <button onClick={this.handleCancelPlan}>
              <h4>Click here to cancel your subscription</h4>
            </button>
          </div>
        </div>
        <div class="container">
          <div class="center">
            <br></br>
            <button onClick={this.handleGoBack}>
              {/* Back navigation */}
              <h4>Click here to go back</h4>
            </button>
          </div>
        </div>

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

export default Subscription;
