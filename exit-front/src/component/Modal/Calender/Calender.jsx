import React from "react";
import * as S from "../style";
import TableRow from "./CalenderTableRow/TableRow";
import TableHeaderRow from "./CalenderTableRow/TableHeaderRow";

const Calender = ({ calenderData, setCalenderData, calenderTime }) => {
  return (
    <S.BookModalCalenderWrapper>
      <S.BookModalCalender>
        <tbody>
          <TableHeaderRow />
          <TableRow
            datalist={calenderData}
            setData={setCalenderData}
            calenderTime={calenderTime}
            row={0}
          />
          <TableRow
            datalist={calenderData}
            setData={setCalenderData}
            calenderTime={calenderTime}
            row={1}
          />
        </tbody>
      </S.BookModalCalender>
    </S.BookModalCalenderWrapper>
  );
};

export default Calender;
