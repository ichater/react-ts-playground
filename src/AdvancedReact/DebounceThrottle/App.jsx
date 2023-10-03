import React, { useState } from "react";
import "./styles.css";
import DebounceText from "./DebounceText";
import ThrottleText from "./ThrottleText";
import DefaultText from "./DefaultText";
import { useDelayedFunctions } from "./hooks";
import CursorMovement from "./CursorMovement";

export default function App() {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [throttledValue, setThrottledValue] = useState("");

  const { useDebounce, useThrottle } = useDelayedFunctions();

  const onChangeDebounce = () => {
    setDebouncedValue(value);
  };

  const onChangeThrottle = () => {
    setThrottledValue((state) => (state = value));
  };

  const debouncedState = useDebounce(onChangeDebounce);
  const throttledState = useThrottle(onChangeThrottle);

  return (
    <div className="wrapper">
      <h2>Debounce and Throttle example:</h2>
      <textarea
        value={value}
        onChange={(e) => {
          debouncedState(e);
          throttledState(e);
          setValue(e.target.value);
        }}
        className="text-area_main"
        rows="4"
        cols="50"
      />
      <div className="debounce-throttle-text_wrapper">
        <DefaultText value={value} />
        <DebounceText value={debouncedValue} />
        <ThrottleText value={throttledValue} />
      </div>
      <CursorMovement />
    </div>
  );
}
