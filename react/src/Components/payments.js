import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import Dashboard from "../dashboard/Dashboard";
import { CardActions } from "@material-ui/core";
import AjaxCall from "../ajax";

export default class Payments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      page: <Dashboard />,
      activeButton: "",
    };

    //  this.scrollDiv = createRef();
  }

  render() {
    var amount = this.props.amount;


    const onSuccess = (payment) => {
      // Congratulation, it came here means everything's fine!
      console.log("The payment has succeeded!", payment);
      var subscription;
      if (amount === 10){
        subscription = 1;
      }else if(amount === 20)
        subscription = 2;
      else
        subscription = 3;

      const redirect = this.props.handleSitePageClick;
      AjaxCall(
          { function: "confirmSubscription", accountId: sessionStorage.getItem("id"), subscription: subscription},
          function(response) {
            console.log(response);
            if (!response.toString().includes("false")) {
              let responseArray = JSON.parse(response.split('php-cgi')[1].trim());
              console.log(responseArray);
              let accountId = responseArray.accountId;
              console.log(accountId);
              sessionStorage.setItem('tier',amount);
              redirect();
              // REDIRECT TO ANOTHER PAGE AFTER THIS
            } else {
              alert("Payment failed to process. Please try again.")
            }
          }
      );
      //window.location.pathname = "../dashboard/Dashboard";
      /*  this.setState({
        page: <Dashboard getStartedOnClick={this.getStarted_OnClick} />,
        activeButton: "",
      }); */
      // this.props.history.push("/../dashboard/Dashboard");
      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onCancel = (data) => {
      // User pressed "cancel" or close Paypal's popup!
      console.log("The payment was cancelled!", data);
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onError = (err) => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

    let env = "sandbox"; // you can set here to 'production' for production
    let currency = "CAD"; // or you can set this value from your props or state
    let total = 10; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    const style = {
      size: "small",
      color: "blue",
      shape: "pill",
      tagline: "false",
    };

    const client = {
      sandbox:
        "ASxjTlobh07A2Uu3c4NEj3DlkN8FcZY_qeA_9ctdjkQBuPKct-rEupiulc2YUipOt7k7_yVh0VC9K3T0",
      production: "",
    };
    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={amount}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
        style={style}
      />
    );
  }
}
