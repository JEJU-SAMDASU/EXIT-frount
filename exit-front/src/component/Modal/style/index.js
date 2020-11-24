import styled from "styled-components";
import { CalenderTable } from "../../Calender/style";

export const ModalBackground = styled.div`
  width: 100%;
  height: 120vh;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BookModal = styled.div`
  width: 1100px;
  height: 700px;
  display: flex;
  background-color: white;
`;

export const BookModalUser = styled.div`
  margin-top: 200px;
  padding: 0px 50px;
  > img {
    width: 200px;
    height: 200px;
    border-radius: 100px;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.3);
  }
  > p {
    font-size: 25px;
    width: 100%;
    text-align: center;
    margin: 10px 0px;
  }
`;

export const BookModalBookWrapper = styled.div`
  width: 780px;
  padding: 30px;
  box-sizing: border-box;
`;

export const BookModalDescription = styled.div`
  width: 100%;
  height: 140px;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.3);
  padding: 10px;
  box-sizing: border-box;
  margin: 30px 0;
`;

export const BookModalContentInput = styled.textarea`
  width: 100%;
  height: 140px;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.3);
  resize: none;
  outline: none;
  padding: 10px;
  box-sizing: border-box;
  margin: 30px 0;
  font-size: 16px;
`;

export const BookModalChoiceButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${({ isAble }) => (isAble ? "#19CE60" : "#C5F9D9")};
  margin: 10px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`;

export const BookModalSendButton = styled.button`
  width: 100px;
  height: 40px;
  background-color: #feb201;
  margin: 10px;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`;

export const BookModalButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const BookModalCalenderWrapper = styled.div`
  width: 100%;
  height: 140px;
`;

export const BookModalCalender = styled(CalenderTable)`
  tbody > tr > td {
    width: 100px;
    cursor: pointer;
  }
  margin: 30px 0px;
  .select {
    background-color: #19ce60;
  }
  .disable {
    background-color: #e11f1f;
    cursor: not-allowed;
  }
`;
