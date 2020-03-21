import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import landingPage from "./landingPage";
import getStarted from "./getStarted";
import tempPage from "../tempPage";
import loginpage from "../loginpage";

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={landingPage} />
      <Route path="/loginpage" component={loginpage} />
      <Route path="/getStarted" component={getStarted} />
      <Route path="/tempPage" component={tempPage} />
    </Switch>
  </BrowserRouter>
);

export default Main;
