import styled from "styled-components";
import {
  CounselorListElement,
  CounselorListElementButton,
  CounselorListElementUser,
  CounselorListElementDescription,
  CounselorListWrapper,
} from "../../CounselorList/style";

export const CounselorBookedList = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
`;

export const CounselorBookedListElement = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  margin: 20px 0px;
  > div {
    height: 100%;
    border-radius: 4px;
    margin-right: 10px;
    display: flex;
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.3);
    width: calc(100% - 90px);
    display: flex;
  }
`;
export const CounselorBookedListElementButton = styled(
  CounselorListElementButton
)``;
export const CounselorBookedListElementUser = styled(
  CounselorListElementUser
)``;
export const CounselorBookedListElementDescription = styled(
  CounselorListElementDescription
)`
  > div {
    display: flex;
    justify-content: center;
    > p {
      text-align: center;
    }
  }
`;

export const CouselorBookedListElementButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  font-weight: 500;
  background-color: #e11f1f;
`;

export const CounselorBookedListElementCallButton = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 6px;
  background-color: ${({ isAble }) => (isAble ? "#19CE60" : "#C5F9D9")};
  > p {
    color: white;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const CounselorBookedListElementWrapper = styled(CounselorListWrapper)`
  height: 675px;
`;
