import React from "react";

export const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="button" type="button">
      {children}
    </button>
  );
};
