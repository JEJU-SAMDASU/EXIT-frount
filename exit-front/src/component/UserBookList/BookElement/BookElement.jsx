import React from "react";
import * as S from "../../CounselorBookedList/style";

const BookElement = ({
  name,
  src,
  description,
  id,
  time,
  bookedListChange,
}) => {
  const deleteButtonClickHandler = () => {
    bookedListChange((bookedList) =>
      bookedList.filter((bookedData) => bookedData.id !== id)
    );
  };
  const approveButtonClickHandler = () => {};
  return (
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
            <S.CouselorBookedListElementButton
              onClick={deleteButtonClickHandler}
            >
              거절하기
            </S.CouselorBookedListElementButton>
          </div>
        </S.CounselorBookedListElementDescription>
      </div>
      <S.CounselorBookedListElementCallButton
        onClick={approveButtonClickHandler}
        isAble={true}
      >
        <p>상담시작</p>
      </S.CounselorBookedListElementCallButton>
    </S.CounselorBookedListElement>
  );
};

export default BookElement;
