import React, { useEffect, useState, useCallback } from "react";

export default function PropDrillExample() {
  const [reRender, setReRender] = useState(false);
  console.log("re-rendered Parent");

  const submit = () => {
    console.log("submit called");
  };

  return (
    <div className="component_wrapper">
      <h2>Prop Drill Example (no Memoization):</h2>
      <button onClick={() => setReRender((render) => !render)}>
        {" "}
        re-render parent
      </button>

      <Child submit={submit} />
    </div>
  );
}

const Child = ({ submit }) => {
  const [reRender, setReRender] = useState(false);
  console.log("re-rendered Child");
  useEffect(() => {
    submit();
  }, [submit]);
  return (
    <button onClick={() => setReRender((render) => !render)}>
      {" "}
      re-render Child
    </button>
  );
};
