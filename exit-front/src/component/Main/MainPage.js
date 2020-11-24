import React, { useEffect, useRef, useState } from "react";
import * as S from "../Style/Main/style";
import Header from "./Header";

function MainPage() {
  const [toggle, SetToggle] = useState(false);
  const one = useRef(null);
  const two = useRef(null);
  const [button, setButton] = useState(0);
  const [img, setImg] = useState("0");
  const [slider, setSlider] = useState(null);

  const ButtonCilck = () => {
    /*     if (button === 0) {
      setButton(1);
      setImg("628px");
    } else {
      setButton(0);
    } */
    setTimeout(() => {});
  };

  const slide = (flag) => {
    /* if (flag % 2 === 0) {
      one.current.style.transform = "translate(-100%)";
      two.current.style.transform = "translate(-100%)";
    } else {
      two.current.style.transform = "translate(0)";
      one.current.style.transform = "translate(0)";
    } */

    SetToggle((prev) => !prev);
    setSlider(setTimeout(slide, 3000, flag + 1));
  };

  useEffect(() => {
    setSlider(setTimeout(slide, 3000, 0));

    return () => {
      clearInterval(slider);
    };
  }, []);

  return (
    <S.BodyBox>
      <Header />
      <S.Main>
        <S.Baner></S.Baner>
        <S.Silder>
          <div className="silder">
            <S.CallImg key="one" ref={one} toggle={toggle} />
            <S.CallImg2 key="two" ref={two} toggle={toggle} />
          </div>
          {/* <div className="button">
            <S.Button
              onClick={ButtonCilck}
              button={button === 0 ? "black" : "white"}
            ></S.Button>
            <S.Button
              onClick={ButtonCilck}
              button={button === 1 ? "black" : "white"}
            ></S.Button>
          </div> */}
        </S.Silder>
        <S.Cover></S.Cover>
        <S.Chat></S.Chat>
      </S.Main>
    </S.BodyBox>
  );
}

export default MainPage;
