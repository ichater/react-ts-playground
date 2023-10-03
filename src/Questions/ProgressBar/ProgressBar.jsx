import React, { useEffect, useState } from "react";

export default function ProgressBar({ isEmpty, onCompleted }) {
  const [startTransition, setStartTransition] = useState(false);

  useEffect(() => {
    if (isEmpty || startTransition) {
      return;
    }

    setStartTransition(true);
  }, [isEmpty]);

  useEffect(() => {}, []);
  return (
    <div className="bar">
      <div
        className={["bar-contents", startTransition && "bar-contents--filled"]
          .filter(Boolean)
          .join(" ")}
        onTransitionEnd={() => {
          onCompleted();
        }}
      ></div>
    </div>
  );
}
