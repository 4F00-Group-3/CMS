import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import landingPage from "./landingPage";
import login from "./logIn";
import getStarted from "./getStarted";
import tempPage from "../tempPage";

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={landingPage} />
      <Route path="/login" component={login} />
      <Route path="/getStarted" component={getStarted} />
      <Route path="/tempPage" component={tempPage} />
    </Switch>
  </BrowserRouter>
);

export default Main;
