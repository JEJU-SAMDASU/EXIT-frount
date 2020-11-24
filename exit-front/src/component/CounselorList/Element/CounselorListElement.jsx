import React from "react";
import * as S from "../style";

const CounselorListElement = ({ src, name, intro, score }) => {
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
          <S.CounselorListElementButton>상담신청</S.CounselorListElementButton>
        </div>
      </S.CounselorListElementDescription>
    </S.CounselorListElement>
  );
};

export default CounselorListElement;
