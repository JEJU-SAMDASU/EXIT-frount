import React from "react";
import * as S from "../style";

const CounselorListElement = ({
  id,
  src,
  name,
  intro,
  score,
  setSelectedData,
  setModalAble,
}) => {
  const buttonClickHandler = () => {
    setSelectedData({
      src,
      name,
      intro,
      score,
      id,
    });
    setModalAble(true);
  };
  return (
    <S.CounselorListElement>
      <S.CounselorListElementUser>
        <img src={src} />
        <p>{name}</p>
      </S.CounselorListElementUser>
      <S.CounselorListElementDescription>
        <p>{intro}</p>
        <div>
          <p>{score}</p>
          <S.CounselorListElementButton onClick={buttonClickHandler}>
            상담신청
          </S.CounselorListElementButton>
        </div>
      </S.CounselorListElementDescription>
    </S.CounselorListElement>
  );
};

export default CounselorListElement;
