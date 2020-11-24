import React, { useState } from "react";
import * as S from "../../component/Style/Chat/style";

function Chat() {
  const [button, setButton] = useState("block");
  const [text, setText] = useState("");

  const buttonCilckHandler = () => {
    setButton("none");
  };

  const sendCilckHandler = () => {
    /* 보내기 버튼을 누르면 채팅 말풍선이 나옴 */
  }

  return (
    <S.MainBox style={{ display: button }}>
      <S.Header>
        <S.Button onClick={buttonCilckHandler}>대화 끝내기</S.Button>
      </S.Header>
      <S.Title>
        <div className="boxcover">
          <S.My>
            <p>
              아이고.. 졸리네요, 늦어서 죄송합니다. ㅠㅠㅠㅠㅠㅠㅠㅠㅠ 진짜 너무
              졸렸서요 지금 다 꺴어요
            </p>
          </S.My>
        </div>
        <S.You>
          <p>
            다 만들엇어요.... 거의 다 끝나가고 있읏빈다. 저는 이제 무엇을
            하면되나요
          </p>
        </S.You>
      </S.Title>

      {/* 밑에 하양색 */}
      <S.InputBox>
        <S.Input>
          <div className="Aimg"></div>
          <input placeholder="궁금한 것들을 물어보세요!"></input>
          <div className="sendimg"></div>
        </S.Input>
      </S.InputBox>
    </S.MainBox>
  );
}
export default Chat;
