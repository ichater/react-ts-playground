import React, { useState } from "react";
import "./styles.css";
import ProgressBar from "./ProgressBar";

export default function Progress() {
  const [bars, setBars] = useState(0);
  const [numFilledUpBars, setNumFilledUpBars] = useState(0);

  const handleClick = () => setBars((bars) => bars + 1);

  return (
    <div className="wrapper">
      <button className="submit" onClick={handleClick}>
        Add
      </button>
      {!!bars &&
        Array(bars)
          .fill(null)
          .map((_, index) => (
            <ProgressBar
              isEmpty={index > numFilledUpBars}
              key={index}
              onCompleted={() => {
                setNumFilledUpBars(numFilledUpBars + 1);
              }}
            />
          ))}
    </div>
  );
}
