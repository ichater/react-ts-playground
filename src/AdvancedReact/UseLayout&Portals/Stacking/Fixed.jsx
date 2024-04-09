import React from "react";
import "./styles.scss";
import { useState, useRef, useLayoutEffect } from "react";

import { Button } from "../Button";

const ModalDialog = ({ onClose, triggerRef, zIndex, position }) => {
  const [state, setState] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    const left =
      position === "absolute"
        ? (triggerRef?.current?.offsetLeft || 0) - 10
        : (triggerRef?.current?.getBoundingClientRect().left || 0) - 10;

    const top =
      position === "absolute"
        ? (triggerRef?.current?.offsetTop || 0) + 30
        : (triggerRef?.current?.getBoundingClientRect().top || 0) + 30;

    setState({
      left,
      top,
    });
  }, [triggerRef, position]);

  return (
    <div
      className="modal"
      style={{ top: state.top, left: state.left, zIndex, position }}
    >
      Dialog is positioned relative to the trigger now
      <br />
      <br />
      <Button onClick={onClose}>close dialog</Button>
    </div>
  );
};

export default function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [showDialog, setShowDialog] = useState();

  return (
    <div className="main" style={{ width: "50%" }}>
      <h2>Position: fixed does not exscape the stacking context</h2>
      Nothing can escape Stacking Context rules. Red div has z-index:2, grey has
      z-index:1
      <br />
      Even fixed dialog will appear under the red div
      <div
        className="grey2"
        style={{
          position: "relative",
          overflow: "hidden",
          zIndex: 1,
          width: "30rem",
          height: "6rem",
        }}
      >
        grey
        <br />
        <Button onClick={() => setShowDialog("abs")} ref={ref1}>
          open absolute dialog
        </Button>
        {showDialog === "abs" && (
          <ModalDialog
            onClose={() => setShowDialog(undefined)}
            triggerRef={ref1}
            zIndex={9999}
            position="absolute"
          />
        )}
        <Button onClick={() => setShowDialog("fix")} ref={ref2}>
          open fixed dialog
        </Button>
        {showDialog === "fix" && (
          <ModalDialog
            onClose={() => setShowDialog(undefined)}
            triggerRef={ref2}
            zIndex={9999}
            position="fixed"
          />
        )}
      </div>
      <div className="red" style={{ position: "relative", zIndex: 2 }}>
        red
      </div>
    </div>
  );
}
