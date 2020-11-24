import React from "react";
import Header from "../Main/Header";
import * as S from "../Style/Mypage/style";

function Mypage({ name, id, mail, job, introduce }) {
  return (
    <>
      <Header></Header>
      <S.BodyBox>
        <S.Profile>
          {/* 프로필 */}
          <S.ProfileBox>
            <S.Photo></S.Photo>
            <S.Name>{name}강은빈</S.Name>
            <S.Id>{id}silverbeen </S.Id>
            <S.Mail>{mail}kub9722@gmail.com</S.Mail>
          </S.ProfileBox>
          {/* 자기 소개 */}
          <S.DetailBox>
            {/* 직엄/상세직업 */}
            <S.JobBox>
              <S.JobDetail>직업</S.JobDetail>
              <S.Job>{job} 학생</S.Job>
            </S.JobBox>
            {/* 소개  */}
            <S.Introduce>{introduce}안녕하세요</S.Introduce>
          </S.DetailBox>
        </S.Profile>
      </S.BodyBox>
    </>
  );
}

export default Mypage;
