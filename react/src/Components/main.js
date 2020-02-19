import React from "react";
import { Switch, Route } from "react-router-dom";
import landingPage from "./landingPage";
import login from "./logIn";
import getStarted from "./getStarted";
import plansAndPricing from "./plansAndPricing";
import faq from "./faq";

const Main = () => (
  <Switch>
    <Route exact path="/" component={landingPage} />
    <Route path="/login" component={login} />
    <Route path="/getStarted" component={getStarted} />
    <Route path="/plansAndPricing" component={plansAndPricing} />
    <Route path="/faq" component={faq} />
  </Switch>
);

export default Main;
