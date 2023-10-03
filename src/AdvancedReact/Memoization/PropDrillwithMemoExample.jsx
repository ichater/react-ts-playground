import React, { useEffect, useState, useCallback } from "react";

export default function PropDrillWithMemoExample() {
  const [reRender, setReRender] = useState(false);
  console.log("re-rendered Parent");

  const submit = useCallback(() => {
    console.log("submit called");
  }, []);

  return (
    <div className="component_wrapper">
      <h2>Prop Drill With Memo:</h2>
      <button onClick={() => setReRender((render) => !render)}>
        {" "}
        re-render Parent
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
