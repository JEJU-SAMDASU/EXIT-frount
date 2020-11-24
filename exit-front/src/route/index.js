import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  CounselorList,
  Signin,
  UserSignUp,
  CounselorBookedList,
  MyPage,
  MainPage,
  CounselorSignUp,
  ConselorLogin,
  VideoCall,
  UserBookList,
  CounselorPage,
} from "../component";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route component={CounselorList} exact path="/search/:search" />
          <Route component={CounselorBookedList} exact path="/bookedList" />
          <Route component={UserBookList} exact path="/bookList" />
          <Route path="/video/:code" component={VideoCall} />
          <Route path="/mypage" component={MyPage} exact />
          <Route path="/counselor-signup" component={CounselorSignUp} exact />
          <Route path="/user-signup" component={UserSignUp} exact />
          <Route path="/sign-in" component={Signin} exact />
          <Route path="/conselor-login" component={ConselorLogin} exact />
          <Route path="/counselor-page" component={CounselorPage} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
