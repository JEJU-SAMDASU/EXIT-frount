import React, { useCallback } from "react";

const TableRow = ({ data, setData, row }) => {
  const onClickHandler = useCallback(
    (col) => (event) => {
      const copy = [...data];
      copy[row][col] = event.target.value;
      setData(copy);
    },
    [row, data, setData]
  );
  return (
    <tr>
      <td>
        <input onChange={onClickHandler(0)} type="time" />
      </td>
      <td>
        <input onChange={onClickHandler(1)} type="time" />
      </td>
      <td>
        <input onChange={onClickHandler(2)} type="time" />
      </td>
      <td>
        <input onChange={onClickHandler(3)} type="time" />
      </td>
      <td>
        <input onChange={onClickHandler(4)} type="time" />
      </td>
      <td>
        <input onChange={onClickHandler(5)} type="time" />
      </td>
      <td>
        <input onChange={onClickHandler(6)} type="time" />
      </td>
    </tr>
  );
};

export default TableRow;
