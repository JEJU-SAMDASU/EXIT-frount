//유저가 로그인 했을때
import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import * as S from "../Style/Main/style";

const Header = () => {
  const history = useHistory();

  const [boxShadow, setBoxshadow] = useState("none");

  const boxOnClick = (e) => {
    setBoxshadow("0px 0px 10px yellow");
  };

  //링크 이동
  const apply = (e) => {
    history.push("/apply-view");
  };

  const mypage = (e) => {
    history.push("/mypage");
  };

  const login = (e) => {
    history.push("/sign-in");
  };
  return (
    <S.Haeder>
      <div className="SearchBox">
        <S.LogoImg></S.LogoImg>
        <S.Search onClick={boxOnClick} boxShadow={boxShadow}>
          <S.Input placeholder="무엇이 궁금하신가요"></S.Input>
        </S.Search>
      </div>
      <ul>
        <S.Title>
          <Link to="/apply-view" onClick={apply}>
            상담 신청 보기
          </Link>
        </S.Title>
        <S.Title>
          <Link to="/mypage" onClick={mypage}>
            마이 페이지
          </Link>
        </S.Title>
        <S.Title>
          <Link to="/sign-in" onClick={login}>
            로그인/회원가입
          </Link>
        </S.Title>
      </ul>
    </S.Haeder>
  );
};

export default Header;
