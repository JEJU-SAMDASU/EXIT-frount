import React, { useEffect, useState } from "react";
import Header from "../Main/Header";
import * as S from "../Style/Mypage/style";
import axios from "axios";
import { URL } from "../../api";

function Mypage() {
  const [user, setUser] = useState({});

  const getUser = async () => {
    const res = await axios.get(`http://${URL}/auth/counselor/`, {
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    });
    setUser(res.data);
  };
  useEffect(() => {
    getUser();
  }, []);
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
