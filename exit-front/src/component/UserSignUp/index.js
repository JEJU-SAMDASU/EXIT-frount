import React, { useState } from "react";
import * as S from "../Style/UserSignUp/style";
import { useHistory } from "react-router-dom";
import "../../index.css";
import axios from "axios";
import { URL } from "../../api";

function UserSignUp() {
  const history = useHistory();
  /* const [button, setButton] = useState("none");

  const ButtonOn = (e) => {
    setButton("yellow");
  }; */

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setrePassword] = useState("");
  const [email, setEmail] = useState("");

  const buttonClickHandler = async () => {
    try {
      await axios.post(`http://${URL}/auth/client/sign-up/`, {
        uid: id,
        email,
        password,
        username: name,
        is_counselor: false,
        is_user: true,
      });
      history.push("/");
    } catch (error) {
      alert("입력 정보를 확인해 주세요.");
    }
  };
  return (
    <S.Main>
      <S.SignUpBox>
        <S.Header />
        <S.Input>
          <input
            placeholder="NAME"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </S.Input>
        <S.Input>
          <input
            placeholder="ID"
            type="text"
            value={id}
            onChange={(event) => setId(event.target.value)}
          ></input>
        </S.Input>
        <S.Input>
          <input
            placeholder="PASSWORD"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </S.Input>
        <S.Input>
          <input
            placeholder="RE_PASSWORD"
            type="password"
            onChange={(event) => setrePassword(event.target.vaule)}
          ></input>
        </S.Input>
        <S.Input>
          <input
            placeholder="E-MAIL"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </S.Input>
        <S.Button onClick={buttonClickHandler}>SIGN UP</S.Button>
      </S.SignUpBox>
    </S.Main>
  );
}
export default UserSignUp;
