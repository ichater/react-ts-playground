import React, { useState } from "react";

export default function ChildComponentImmutable({ childOne, childTwo }) {
  const [count, setCount] = useState(0);

  console.log("Immutable Child Component re-rendered");
  return (
    <div className="child_wrapper">
      <div
        className="btn_wrapper"
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        {childTwo}
      </div>
      <h1>{count}</h1>
      <div
        className="btn_wrapper"
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        {childOne}
      </div>
    </div>
  );
}
