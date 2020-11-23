import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Signin, UserSignUp } from "../component/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in" component={Signin} exact />
        <Route path="/user-signup" component={UserSignUp} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
