import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  VideoCall,
  CounselorList,
  Signin,
  UserSignUp,
  CounselorBookedList,
  Calender,
  MyPage,
  MainPage,
  ApplyView,
  ConselorLogin,
} from "../component";
import Header from "../component/Main";

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
