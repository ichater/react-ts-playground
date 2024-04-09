import React, { useState } from "react";
import "./styles.css";
import { initialBoard } from "./data";
import ColumnComponent from "./Column";

export default function App() {
  const [columns, setColumns] = useState(initialBoard.columns);

  return (
    <div className="wrapper">
      <div className="col-wrapper">
        {columns.map((col) => {
          return (
            <ColumnComponent
              column={col}
              key={col.id}
              setColumns={setColumns}
            />
          );
        })}
      </div>
    </div>
  );
}
