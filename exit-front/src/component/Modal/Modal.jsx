import React, { useState } from "react";
import * as S from "./style";
import Calender from "./Calender";

const Modal = ({ data, dataChange, setModalAble }) => {
  const [content, setContent] = useState("");
  const [calenderData, setCalenderData] = useState([
    { isAble: false, isSelected: false },
    { isAble: false, isSelected: false },
    { isAble: false, isSelected: false },
    { isAble: false, isSelected: false },
    { isAble: false, isSelected: false },
    { isAble: false, isSelected: false },
    { isAble: false, isSelected: false },
  ]);
  const [calenderTime, setCalenderTime] = useState([
    ["11:11", "", "12:00", "", "", "", ""],
    ["11:11", "", "12:00", "", "", "", ""],
  ]);
  const [type, setType] = useState("chatting");
  const buttonClickHandler = () => {
    setModalAble(false);
  };
  return (
    <S.ModalBackground
      onClick={() => {
        setModalAble(false);
        dataChange();
      }}
    >
      <S.BookModal
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <S.BookModalUser>
          <img src={data.src} />
          <p>{data.name}</p>
        </S.BookModalUser>
        <S.BookModalBookWrapper>
          <S.BookModalDescription>{data.intro}</S.BookModalDescription>
          <S.BookModalCalenderWrapper>
            <Calender
              calenderData={calenderData}
              setCalenderData={setCalenderData}
              calenderTime={calenderTime}
            />
          </S.BookModalCalenderWrapper>
          <S.BookModalContentInput
            placeholder="상담할 내용을 입력해 주세요."
            value={content}
            onChange={(event) => setContent(event.target.value)}
          />
          <S.BookModalButtonWrapper>
            <S.BookModalChoiceButton
              isAble={type === "chatting"}
              onClick={() => setType("chatting")}
            >
              채팅으로 상담
            </S.BookModalChoiceButton>
            <S.BookModalChoiceButton
              isAble={type === "call"}
              onClick={() => setType("call")}
            >
              화상으로 상담
            </S.BookModalChoiceButton>
            <S.BookModalSendButton onClick={buttonClickHandler}>
              신청하기
            </S.BookModalSendButton>
          </S.BookModalButtonWrapper>
        </S.BookModalBookWrapper>
      </S.BookModal>
    </S.ModalBackground>
  );
};

export default Modal;
