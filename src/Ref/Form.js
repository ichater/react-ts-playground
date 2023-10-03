import { useRef, useEffect, useState } from "react";

export default function Form() {
  // create the Ref in Form component
  const [name, setName] = useState("");
  const ref = useRef(null);

  const onSubmitClick = () => {
    if (!name) {
      // focus the input field if someone tries to submit empty name
      ref.current.focus();
    } else {
      // submit the data here!
      console.log(name);
    }
  };

  return (
    <>
      <input onChange={(e) => setName(e.target.value)} ref={ref} />
      <button onClick={onSubmitClick}>Submit the form!</button>
    </>
  );
}
// function InputField({ inputRef }) {
//   // the rest of the code is the same

//   // pass ref from prop to the internal input component
//   return <input ref={inputRef} />;
// }
