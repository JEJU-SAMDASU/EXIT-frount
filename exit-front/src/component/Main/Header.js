import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import * as S from "../Style/Main/style";
import { URL } from "../../api";

const Header = () => {
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(false);
  const [isCounselor, setIsCounselor] = useState(false);

  const [boxShadow, setBoxshadow] = useState("none");

  const boxOnClick = (e) => {
    setBoxshadow("0px 0px 10px yellow");
  };
  const logOut = () => {
    localStorage.clear();
  };
  const checkIsCounselor = async () => {
    try {
      const token = `JWT ${localStorage.getItem("token")}`;
      const { data } = await axios.get(`http://${URL}/auth/counselor/`, {
        headers: {
          Authorization: token,
        },
      });
      setIsCounselor(data.is_counselor);
    } catch (error) {}
  };
  useEffect(() => {
    if (!localStorage.getItem("token")) setIsLogin(false);
    else setIsLogin(true);
    checkIsCounselor();
  }, []);
  return (
    <S.Haeder>
      <div className="SearchBox">
        <S.LogoImg onClick={() => history.push("/")}></S.LogoImg>
        <S.Search onClick={boxOnClick} boxShadow={boxShadow}>
          <S.Input placeholder="무엇이 궁금하신가요"></S.Input>
        </S.Search>
      </div>
      <ul>
        {isLogin ? (
          isCounselor ? (
            <>
              <S.Title>
                <Link to="/bookedList">상담 예약 보기</Link>
              </S.Title>
              <S.Title>
                <Link to="/" onClick={logOut}>
                  LOGOUT
                </Link>
              </S.Title>
              <S.Title>
                <Link to="/mypage">MYPAGE</Link>
              </S.Title>
            </>
          ) : (
            <>
              <S.Title>
                <Link to="/bookList">상담 신청 보기</Link>
              </S.Title>
              <S.Title>
                <Link to="/" onClick={logOut}>
                  LOGOUT
                </Link>
              </S.Title>
              <S.Title>
                <Link to="/mypage">MYPAGE</Link>
              </S.Title>
            </>
          )
        ) : (
          <>
            <S.Title>
              <Link to="/sign-in">USER SIGNIN</Link>
            </S.Title>
            <S.Title>
              <Link to="/user-signup">USER SIGNUP</Link>
            </S.Title>
            <S.Title>
              <Link to="/conselor-login">CONSELOR SIGNIN</Link>
            </S.Title>
            <S.Title>
              <Link to="/counselor-signup">CONSELOR SIGNUP</Link>
            </S.Title>
          </>
        )}
      </ul>
    </S.Haeder>
  );
};

export default Header;
