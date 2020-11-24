import React from "react";
import Header from "../Main/Header";
import * as S from "../Style/Mypage/style";
import Calender from "../Modal/Calender";
import axios from 'axios';

function CounselorPage() {
  return (
    <>
      <Header />
      <S.BodyBox>
        <S.Profile>
          {/* 프로필 */}
          <S.ProfileBox>
            <S.Photo></S.Photo>
            <S.Name></S.Name>
            <S.Id></S.Id>
            <S.Mail></S.Mail>
          </S.ProfileBox>
          {/* 소개  */}
          <div className="introduce">
            <S.Introduce />
            <h1>상담 가능 시간</h1>
            {/* <Calender /> */}
          </div>
        </S.Profile>
      </S.BodyBox>
    </>
  );
}

export default CounselorPage;
