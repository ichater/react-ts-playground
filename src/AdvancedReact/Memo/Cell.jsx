import React from "react";

export default function Cell({ cell, setColumns }) {
  const handleIncrement = () =>
    setColumns((column) => {
      const colInx = column.findIndex((col) => col.id === cell.col_id);
      const cellIdx =
        column[colInx][column[colInx].cells.findIndex((c) => c.id === cell.id)];

      column[colInx].cells[cellIdx].count++;
      return column;
    });

  // const handleDecrement = () => setColumns((count) => count--);

  return (
    <div className="cell-wrapper">
      <h3>{cell.id}</h3>
      <div className="counter">
        {/* <button onClick={() => handleDecrement()}>-</button> */}
        <p>{cell.count}</p>
        <button onClick={() => handleIncrement()}>+</button>
      </div>
      <textarea value={cell.text} />
    </div>
  );
}
