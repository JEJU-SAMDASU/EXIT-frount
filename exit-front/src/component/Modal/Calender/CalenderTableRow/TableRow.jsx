import React from "react";

const TableRow = ({ datalist, setData, row, calenderTime }) => {
  const onClick = (selectIndex) => {
    const copy = [...datalist].map((data, index) => {
      if (!data.isAble) {
        return data;
      }
      if (index === selectIndex) {
        return {
          ...data,
          isSelected: true,
        };
      } else {
        return {
          ...data,
          isSelected: false,
        };
      }
    });
    setData(copy);
  };
  return (
    <tr>
      {datalist.map((data, index) => {
        if (!data.isAble) {
          return <td className="disable"></td>;
        }
        return (
          <td
            className={`${data.isSelected ? "select" : ""}`}
            onClick={() => onClick(index)}
          >
            {calenderTime[row][index]}
          </td>
        );
      })}
    </tr>
  );
};

export default TableRow;
