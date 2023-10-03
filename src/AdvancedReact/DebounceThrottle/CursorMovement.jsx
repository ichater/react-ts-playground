import React, { useState } from "react";
import { useDelayedFunctions } from "./hooks";

export default function CursorMovement() {
  const [count, setCount] = useState(0);
  const [debouncedCount, setDebouncedCount] = useState(0);
  const [throttledCount, setThrottledCount] = useState(0);

  const { useDebounce, useThrottle } = useDelayedFunctions();

  const onChangeDebounce = () => {
    setDebouncedCount((count) => count + 1);
  };

  const onChangeThrottle = () => {
    setThrottledCount((count) => count + 1);
  };

  const debouncedState = useDebounce(onChangeDebounce, 200);
  const throttledState = useThrottle(onChangeThrottle, 200);

  return (
    <div
      onMouseMoveCapture={() => {
        debouncedState();
        throttledState();
        setCount((count) => count + 1);
      }}
      className="mouse-move_wrapper"
    >
      <h2>Tracking cursor movement</h2>
      <div className="counts_wrapper">
        <div>
          <h3>count:</h3>
          <p>{count}</p>
        </div>
        <div>
          <h3>debounced:</h3>
          <p>{debouncedCount}</p>
        </div>
        <div>
          <h3>throttled:</h3>
          <p>{throttledCount}</p>
        </div>
      </div>
    </div>
  );
}
