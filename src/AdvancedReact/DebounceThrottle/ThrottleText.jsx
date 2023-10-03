import React from "react";

export default function ThrottleText({ value }) {
  return (
    <div className="text_wrapper">
      <h3>Throttle text:</h3>
      <p>{value}</p>
    </div>
  );
}
