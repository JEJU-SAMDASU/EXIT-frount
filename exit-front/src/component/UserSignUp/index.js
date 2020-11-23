import React, { useCallback, useState } from "react";
import * as S from "../Style/UserSignUp/style";
import "../../index.css";

function UserSignUp() {
  /* const [button, setButton] = useState("none");

  const ButtonOn = (e) => {
    setButton("yellow");
  }; */

  return (
    <S.Main>
      <S.SignUpBox >
        <S.Header />
        <S.Input>
          <input placeholder="NAME" type="text"></input>
        </S.Input>
        <S.Input>
          <input placeholder="ID" type="text"></input>
        </S.Input>
        <S.Input>
          <input placeholder="PASSWORD" type="password"></input>
        </S.Input>
        <S.Input>
          <input placeholder="RE_PASSWORD" type="password"></input>
        </S.Input>
        <S.Input>
          <input placeholder="E-MAIL" type="text"></input>
        </S.Input>
        <S.Button >
          {/* <Link to="/user-sigup">SIGN UP</Link> */}
          SIGN UP
        </S.Button>
      </S.SignUpBox>
    </S.Main>
  );
}
export default UserSignUp;
