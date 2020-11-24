import React, { useEffect, useState } from "react";
import * as S from "../Style/Main/style";
import Header from "./Header";

function MainPage() {
  const [imgHidden, setImgHidden] = useState("none");
  //const [button, setButton] = useState("white");

  const button = false;

  const ButtonCilck = () => {
    if (button != button) {
      button("black");
    }
    else{
      button("white");
    }
  };

  useEffect(() => {}, [button]);

  return (
    <S.BodyBox>
      <Header></Header>
      <S.Main>
        <S.Baner></S.Baner>
        <S.Silder>
          <div className="silder">
            <S.CallImg></S.CallImg>
            <S.CallImg2></S.CallImg2>
          </div>
          <div className="button">
            <S.Button onClick={ButtonCilck} button={button}></S.Button>
            <S.Button onClick={ButtonCilck} button={button}></S.Button>
          </div>
        </S.Silder>
        <S.Chat></S.Chat>
      </S.Main>
    </S.BodyBox>
  );
}

export default MainPage;
