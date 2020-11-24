import React, { useState } from "react";
import * as S from "../Style/Signin/style";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signin() {
  const history = useHistory();
  const [id, setId] = useState("");

  const [password, setPassword] = useState("");

  const buttonClickHandler = async () => {
    try {
      await axios.post("/auth/client/sign-up", {
        uid: id,
        password,
      });
      history.push("/");
    } catch (error) {
      alert("입력 정보를 확인해 주세요");
    }
  };

  return (
    <S.Main>
      <S.SigninBox>
        <S.Header></S.Header>
        <S.Input>
          <input
            placeholder="ID"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          ></input>
        </S.Input>
        <S.Input>
          <input
            placeholder="PASSWORD"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </S.Input>
        <S.ButtonBox>
          <S.Button onClick={buttonClickHandler}>LOGIN</S.Button>
          <S.Button >
            <Link to="/user-signup">SIGN UP</Link>
          </S.Button>
        </S.ButtonBox>
      </S.SigninBox>
    </S.Main>
  );
}

export default Signin;
