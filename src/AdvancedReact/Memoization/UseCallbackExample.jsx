import React, { useEffect, useState, useCallback } from "react";

export default function UseCallBackExample() {
  const [reRender, setReRender] = useState(false);

  console.log("re-rendered useCallback");
  const submit = useCallback(() => {
    console.log("submit called");
  }, []);
  useEffect(() => {
    // call the function here
    submit();
    // it's declared outside of the useEffect
    // so should be in the
  }, [submit]);
  return (
    <div className="component_wrapper">
      <h2>UseCallback Example:</h2>
      <h3>{"const fn = useCallback(() => {...}, [])"}</h3>

      <button onClick={() => setReRender((render) => !render)}>
        {" "}
        re-render
      </button>
    </div>
  );
}
