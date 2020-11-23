import React, { Link } from "react";
import * as S from "../Style/Signin/style";
import { UserSignUp } from "../UserSignUp/index";

function Signin() {
  return (
    <S.Main>
      <S.SigninBox>
        <S.Header></S.Header>
        <S.Input>
          <input placeholder="ID" type="text"></input>
        </S.Input>
        <S.Input>
          <input placeholder="PASSWORD" type="password"></input>
        </S.Input>
        <S.ButtonBox>
          <S.Button>LOGIN</S.Button>
          <S.Button>
            {/* <Link to="/user-sigup">SIGN UP</Link> */}
            SIGN UP
          </S.Button>
        </S.ButtonBox>
      </S.SigninBox>
    </S.Main>
  );
}

export default Signin;
