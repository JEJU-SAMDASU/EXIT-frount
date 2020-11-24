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
} from "../component";
import Header from "../component/Main";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route component={VideoCall} path="/call" />
          <Route component={CounselorList} path="/search/:search" />
          <Route component={CounselorBookedList} path="/bookedList" />
          <Route path="/" component={MainPage} exact />
          <Route path="/calender" component={Calender} />
          <Route path="/sign-in" component={Signin} exact />
          <Route path="/user-signup" component={UserSignUp} exact />
          <Route path="/apply-view" component={ApplyView} exact />
          <Route path="/mypage" component={MyPage} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
