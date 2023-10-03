import React, { useState } from "react";
import { FaBitcoin, FaCcPaypal } from "react-icons/fa";

export default function ChildComponentMutable({ childOne, childTwo }) {
  const [count, setCount] = useState(0);

  console.log("Mutable Child Component re-rendered");

  const defaultPropsOne = {
    type: "confirm",
    text: "Subtract",
    icon: <FaCcPaypal />,
  };

  const newPropsOne = {
    ...defaultPropsOne,
    ...childTwo.props,
  };
  const clonedIcon = React.cloneElement(childTwo, newPropsOne);

  const defaultPropsTwo = {
    text: "Add",
    icon: <FaBitcoin />,
  };

  const newPropsTwo = {
    ...defaultPropsTwo,
    ...childOne.props,
  };
  const clonedIconTwo = React.cloneElement(childOne, newPropsTwo);

  return (
    <div className="child_wrapper">
      <div
        className="btn_wrapper"
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        {clonedIcon}
      </div>
      <h1>{count}</h1>
      <div
        className="btn_wrapper"
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        {" "}
        {clonedIconTwo}
      </div>
    </div>
  );
}
