import styled from "styled-components";

export const CounselorList = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 70px;
`;

export const CounselorListSearchTitle = styled.h1`
  font-size: 30px;
  font-weight: 500;
`;

export const CounselorListWrapper = styled.div`
  width: 1100px;
  height: 800px;
  overflow-y: scroll;
  padding: 10px;
`;

export const CounselorListElement = styled.div`
  margin: 20px 0px;
  width: 100%;
  height: 80px;
  display: flex;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.3);
`;

export const CounselorListElementUser = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: center;
  > img {
    width: 50px;
    height: 50px;
    margin: 10px;
    background-position: center center;
  }
  > p {
    font-size: 22px;
    margin: 10px;
    width: 70px;
  }
  border-right: 5px solid #feb201;
`;

export const CounselorListElementDescription = styled.div`
  display: flex;
  justify-content: space-between;
  > p {
    width: 720px;
    padding: 0px 30px;
    box-sizing: border-box;
    font-size: 18px;
    display: flex;
    align-items: center;
  }
  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    > p {
      text-align: center;
      font-size: 18px;
      width: 100%;
    }
  }
`;

export const CounselorListElementButton = styled.button`
  background-color: #feb201;
  width: 100px;
  height: 40px;
  color: white;
  font-size: 20px;
  font-weight: 600;
`;
