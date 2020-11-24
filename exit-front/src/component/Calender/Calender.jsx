import React, { useState } from "react";
import * as S from "./style";
import TableRow from "./CalenderTableRow";
import TableHeaderRow from "./CalenderTableRow/TableHeaderRow";

const Calender = () => {
  const [calenderData, setCalenderData] = useState([
    [null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null],
  ]);
  return (
    <S.Calender>
      <S.CalenderTable>
        <tbody>
          <TableHeaderRow />
          <TableRow row={0} data={calenderData} setData={setCalenderData} />
          <TableRow row={1} data={calenderData} setData={setCalenderData} />
        </tbody>
      </S.CalenderTable>
    </S.Calender>
  );
};

export default Calender;
