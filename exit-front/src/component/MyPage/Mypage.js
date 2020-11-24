import React, { useState } from "react";
import Header from "../Main/Header";
import * as S from "../Style/Mypage/style";
import axios from "axios";

function Mypage() {
  const [user, setUser] = useState({});

  const getUser = async () => {
    const res = await axios.get("/auth/counselor", {
      headers: {
        Authorization: "jwt eysdgsdgsd.eyafdgsdg.agagaga",
      },
    });

    setUser(res.data);

    /* {
      "uid": "gksqls0128",
      "email": "hanbin8269@gmail.com",
      "username": "정한빈",
      "is_counselor": true,
      "is_client": false,
      "introduction": "~~를 하고 싶은 ~~ 입니다~~",
      "category": [
        "진로",
        "연애"
      ]
    } */

    console.log(res);
  };

  return (
    <>
      <Header />
      <S.BodyBox>
        <S.Profile>
          {/* 프로필 */}
          <S.ProfileBox>
            <S.Photo></S.Photo>
            <S.Name>{user.username}</S.Name>
            <S.Id>{user.uid} </S.Id>
            <S.Mail>{user.email}</S.Mail>
          </S.ProfileBox>
          {/* 소개  */}
          <S.Introduce>{user.introduction}</S.Introduce>
        </S.Profile>
      </S.BodyBox>
    </>
  );
}

export default Mypage;
