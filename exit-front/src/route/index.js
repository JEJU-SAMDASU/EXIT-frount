import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  CounselorList,
  Signin,
  UserSignUp,
  CounselorBookedList,
  Calender,
  MyPage,
  MainPage,
  CounselorSignUp,
  ApplyView,
  ConselorLogin,
} from "../component";
import Header from "../component/Main";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route component={CounselorList} path="/search/:search" />
          <Route component={CounselorBookedList} path="/bookedList" />
          <Route path="/" component={MainPage} exact />
          <Route path="/calender" component={Calender} />
          <Route path="/sign-in" component={Signin} exact />
          <Route path="/user-signup" component={UserSignUp} exact />
          <Route path="/counselor-signup" component={CounselorSignUp} exact />
          <Route path="/apply-view" component={ApplyView} exact />
          <Route path="/mypage" component={MyPage} exact />
        <Router path="/conselor-login" component={ConselorLogin} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
