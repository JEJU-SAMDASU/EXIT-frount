import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Signin,
  UserSignUp,
  MainPage,
  ApplyView,
  MyPage,
  ConselorLogin,
} from "../component/index";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/sign-in" component={Signin} exact />
        <Route path="/user-signup" component={UserSignUp} exact />
        <Route path="/apply-view" component={ApplyView} exact />
        <Route path="/mypage" component={MyPage} exact />
        <Router path="/conselor-login" component={ConselorLogin} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
