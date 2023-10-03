import React, { useEffect, useState } from "react";

export default function UseEffectExample() {
  const [reRender, setReRender] = useState(false);

  console.log("re-rendered UseEffect");
  const submit = () => {
    console.log("submit called");
  };
  useEffect(() => {
    // call the function here
    submit();
    // it's declared outside of the useEffect
    // so should be in the
  }, [submit]);
  return (
    <div className="component_wrapper">
      <h2>useEffect Example:</h2>

      <button onClick={() => setReRender((render) => !render)}>
        {" "}
        re-render
      </button>
    </div>
  );
}
