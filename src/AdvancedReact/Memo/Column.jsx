import React from "react";
import Cell from "./Cell";

export default function Column({ column, setColumns }) {
  return (
    <div className="column">
      <h1>{column.name}</h1>

      {column.cells.map((cell) => (
        <Cell cell={cell} key={cell.id} setColumns={setColumns} />
      ))}
    </div>
  );
}
