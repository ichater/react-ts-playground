import React, { useEffect, useState, useMemo } from "react";

export default function UseMemoExample() {
  const [reRender, setReRender] = useState(false);

  console.log("re-rendered useMemo");
  const submit = useMemo(() => {
    return () => console.log("submit called");
  }, []);
  useEffect(() => {
    submit();
  }, [submit]);
  return (
    <div className="component_wrapper">
      <h2>UseMemo Example:</h2>
      <h3>{"useMemo(() => {return () =>{... }}, []);"}</h3>

      <button onClick={() => setReRender((render) => !render)}>
        {" "}
        re-render
      </button>
    </div>
  );
}
