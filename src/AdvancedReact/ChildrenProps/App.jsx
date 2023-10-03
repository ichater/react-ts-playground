import React from "react";
import ChildComponentImmutable from "./ChildComponentImmutable";
import "./styles.css";
import { FaBeer, FaAirbnb } from "react-icons/fa";
import ChildComponentMutable from "./ChildComponentMutable";

export const Button = ({ text, icon, type }) => {
  console.log(`${text} button rendered`);
  const style = {
    backgroundColor:
      type === "confirm" ? "hsl(160, 50%, 50%)" : "hsl(0, 70%, 50%)",
  };
  return (
    <button style={style} className="btn">
      {text} {icon}
    </button>
  );
};

export default function App() {
  return (
    <div className="app_wrapper">
      <h1>Child Props:</h1>
      {/* <ChildComponentImmutable
        childOne={<Button type="confirm" text="Increment" icon={<FaBeer />} />}
        childTwo={<Button text="Decrement" icon={<FaAirbnb />} />}
      /> */}
      {/* <ChildComponentMutable childOne={<Button />} childTwo={<Button />} /> */}
      {/* <ChildComponentMutable
        childOne={<Button type="confirm" text="Increment" icon={<FaBeer />} />}
        childTwo={<Button type="danger" text="Decrement" icon={<FaAirbnb />} />}
      /> */}
    </div>
  );
}
