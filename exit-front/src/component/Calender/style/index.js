import styled from "styled-components";

export const Calender = styled.div`
  width: 100%;
  height: 100%;
`;

export const CalenderTable = styled.table`
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  > tr,
  td {
    border: 1px solid black;
    text-align: center;
    > input {
      width: 100%;
    }
  }
  > tbody > .header > td {
    background-color: #feb201;
  }
  > tbody > tr > td > input {
    display: flex;
    justify-content: center;
    background-color: #ffe3a2;
    width: 80px;
  }
  > tbody > tr > td {
    background-color: #ffe3a2;
  }
  .blue {
    color: blue;
  }
  .red {
    color: red;
  }
`;
