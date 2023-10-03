import React from "react";

export default function DefaultText({ value }) {
  return (
    <div className="text_wrapper">
      <h3>Default text:</h3>
      <p>{value}</p>
    </div>
  );
}
