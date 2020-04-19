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
import Payments from "../Components/payments.js";
import NewWindow from "react-new-window";
import AjaxCall from "../ajax";

class Subscription extends Component {
  render() {
    const subscription = sessionStorage.getItem("tier");
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
                  {subscription == 1 && <h3>This is your current plan</h3>}
                  {subscription == 2 && <h3>Click here to downgrade</h3>}
                  {subscription == 3 && <h3>Click here to downgrade</h3>}
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
                    <Payments
                      amount={10}
                      handleSitePageClick={this.props.handleSitePageClick}
                    >
                      Pay
                    </Payments>
                  )}
                  {subscription == 2 && <h3>This is your current plan</h3>}
                  {subscription == 3 && <h3>Click here to downgrade</h3>}
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
                    <Payments
                      amount={20}
                      handleSitePageClick={this.props.handleSitePageClick}
                    >
                      Pay
                    </Payments>
                  )}
                  {subscription == 2 && (
                    <Payments
                      amount={10}
                      handleSitePageClick={this.props.handleSitePageClick}
                    >
                      Pay
                    </Payments>
                  )}
                  {subscription == 3 && <h3>This is your current plan</h3>}
                </CardActions>
              </Card>
            </div>
          </Cell>
        </Grid>
        <a
          href="#"
          className="cancel"
          href="#"
          onClick={this.props.signUp_click}
        >
          Click here to cancel your subscription
        </a>
        <br></br>
        <a href="#" className="back" href="#" onClick={this.props.signUp_click}>
          Click here to go back
        </a>
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
