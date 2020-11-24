import React from "react";
import * as S from "../style";

const CounselorBookedListElement = ({ name, src, description, id, time }) => (
  <S.CounselorBookedListElement>
    <div>
      <S.CounselorBookedListElementUser>
        <img src={src} />
        <p>{name}</p>
      </S.CounselorBookedListElementUser>
      <S.CounselorBookedListElementDescription>
        <p>{description}</p>
        <div>
          <p>{time}</p>
          <S.CouselorBookedListElementButton>
            거절하기
          </S.CouselorBookedListElementButton>
        </div>
      </S.CounselorBookedListElementDescription>
    </div>
    <S.CounselorBookedListElementCallButton isAble={true}>
      <p>상담시작</p>
    </S.CounselorBookedListElementCallButton>
  </S.CounselorBookedListElement>
);

export default CounselorBookedListElement;
