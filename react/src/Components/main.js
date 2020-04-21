import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import landingPage from "./landingPage";
import getStarted from "./getStarted";
import tempPage from "../tempPage";
import LoginPage from "../Login/loginpage";
import passwordsubmit from "./passwordsubmit";
import submitemail from "./submitemail";
import securityCode from "./securityCode";
import createAccount from "../Login/createAccount";
import ImageEditor from "./ImageEditor";

const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={landingPage} />
      <Route path="/loginpage" component={LoginPage} />
      <Route path="/getStarted" component={getStarted} />
      <Route path="/tempPage" component={tempPage} />
      <Route path="/passwordsubmit" component={passwordsubmit} />
      <Route path="/submitemail" component={submitemail} />
      <Route path="/securityCode" component={securityCode} />
      <Route path="/createAccount" component={createAccount} />
      <Route path="/ImageEditor" component={ImageEditor} />
    </Switch>
  </BrowserRouter>
);

export default Main;
