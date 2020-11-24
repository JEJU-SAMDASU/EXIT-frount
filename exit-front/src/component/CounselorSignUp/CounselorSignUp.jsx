import React, { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as S from "../Style/UserSignUp/style";
import "../../index.css";
import Calender from "../Calender";
import { URL } from "../../api";

function UserSignUp() {
  const [calenderData, setCalenderData] = useState([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ]);
  const history = useHistory();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [repassword, setRepassword] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [category, setCategory] = useState("");
  const getAbleTimeText = (startTime, endTime) => {
    if (startTime.length === 0 || endTime.length === 0) {
      return "";
    }
    return `${startTime}~${endTime}`;
  };
  const buttonClickHandler = async () => {
    try {
      const body = {
        uid: id,
        email,
        username: name,
        password,
        introduction,
        is_counselor: true,
        is_client: false,
        category: [category],
        able_time: [
          getAbleTimeText(calenderData[0][0], calenderData[1][0]),
          getAbleTimeText(calenderData[0][1], calenderData[1][1]),
          getAbleTimeText(calenderData[0][2], calenderData[1][2]),
          getAbleTimeText(calenderData[0][3], calenderData[1][3]),
          getAbleTimeText(calenderData[0][4], calenderData[1][4]),
          getAbleTimeText(calenderData[0][5], calenderData[1][5]),
          getAbleTimeText(calenderData[0][6], calenderData[1][6]),
        ],
      };
      await axios.post(`http://${URL}/auth/counselor/sign-up/`, body);
      history.push("/");
    } catch (error) {
      alert("입력 정보를 확인해 주세요.");
    }
  };
  return (
    <S.Main>
      <S.CounselorSignUpBox>
        <S.Header />
        <S.Input>
          <input
            placeholder="NAME"
            type="text"
            onChange={(event) => setName(event.target.value)}
          ></input>
        </S.Input>
        <S.Input>
          <input
            placeholder="ID"
            type="text"
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
            onChange={(event) => setRepassword(event.target.value)}
          ></input>
        </S.Input>
        <S.Input>
          <input
            placeholder="E-MAIL"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </S.Input>
        <S.Input>
          <input
            placeholder="INTRODUCTION"
            type="text"
            onChange={(event) => setIntroduction(event.target.value)}
          ></input>
        </S.Input>
        <S.Input>
          <input
            placeholder="CATEGORY ex)취업, 친구"
            type="text"
            onChange={(event) => setCategory(event.target.value)}
          ></input>
        </S.Input>
        <S.CalenderWrapper>
          <Calender
            calenderData={calenderData}
            setCalenderData={setCalenderData}
          />
        </S.CalenderWrapper>
        <S.Button onClick={buttonClickHandler}>SIGN UP</S.Button>
      </S.CounselorSignUpBox>
    </S.Main>
  );
}
export default UserSignUp;
