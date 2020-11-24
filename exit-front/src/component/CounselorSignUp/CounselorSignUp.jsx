import React, { useCallback, useState } from "react";
import * as S from "../Style/UserSignUp/style";
import "../../index.css";
import Calender from "../Calender";

function UserSignUp() {
  const [calenderData, setCalenderData] = useState([
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ]);
  return (
    <S.Main>
      <S.CounselorSignUpBox>
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
        <S.Input>
          <input placeholder="OCCUPATION" type="text"></input>
        </S.Input>
        <S.Input>
          <input placeholder="INTRODUCTION" type="text"></input>
        </S.Input>
        <S.Input>
          <input placeholder="CATEGORY ex)취업, 친구" type="text"></input>
        </S.Input>
        <S.CalenderWrapper>
          <Calender
            calenderData={calenderData}
            setCalenderData={setCalenderData}
          />
        </S.CalenderWrapper>
        <S.Button>SIGN UP</S.Button>
      </S.CounselorSignUpBox>
    </S.Main>
  );
}
export default UserSignUp;
