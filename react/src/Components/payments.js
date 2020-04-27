import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import Dashboard from "../dashboard/Dashboard";
import { CardActions } from "@material-ui/core";
import AjaxCall from "../ajax";

/**
 * This component is used for handling our PayPal payments
 */
export default class Payments extends React.Component {


  /**
   * Constructor handles initializing all properties for the component
   * @param props inherited parent component properties
   */
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      page: <Dashboard />,
      activeButton: "",
    };

  }


  render() {
    // payment amount
    var amount = this.props.amount;


    /**
     * This is used to handle successful payments
     * @param payment: The payment object
     */
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
              sessionStorage.setItem('tier',subscription);
              redirect();
            } else {
              alert("Payment failed to process. Please try again.");
            }
          }
      );
    };

    /**
     * This is used to handle cancelled payments
     * @param data: The payment object
     */
    const onCancel = (data) => {
      // User pressed "cancel" or close Paypal's popup!
      console.log("The payment was cancelled!", data);
    };

    /**
     * This is used to handle payments errors
     * @param err: The returned error
     */
    const onError = (err) => {
      console.log("Error!", err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

    let env = "sandbox"; // you can set here to 'production' for production
    let currency = "CAD"; // or you can set this value from your props or state
    let total = 10; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

    const style = {
      size: "responsive",
      color: "gold",
      shape: "rect",
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

    /**
     * This is used to render the react component
     */
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
