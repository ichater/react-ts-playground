import React from "react";

export default function DebounceText({ value }) {
  return (
    <div className="text_wrapper">
      <h3>Debounce text:</h3>
      <p>{value}</p>
    </div>
  );
}
