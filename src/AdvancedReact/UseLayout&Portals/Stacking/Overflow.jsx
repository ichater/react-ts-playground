import React from "react";
import { Button } from "../Button";

export default function Overflow({
  setShowDialog,
  showDialog,
  refRed3,
  refGrey3,
  ModalDialog,
}) {
  return (
    <div className="main" style={{ width: "50%" }}>
      <h2>Click button to show the dialog on top</h2>
      <>
        All divs have overflow: hidden set. Red div also has position
        <br />
        <br />
        <div
          className="grey"
          style={{ position: "relative", overflow: "hidden" }}
        >
          grey
          <br />
          <Button onClick={() => setShowDialog("grey3")} ref={refGrey3}>
            open dialog
          </Button>
          {showDialog === "grey3" && (
            <>
              {" "}
              <ModalDialog
                onClose={() => setShowDialog(undefined)}
                triggerRef={refGrey3}
                zIndex={9999}
              />
            </>
          )}
        </div>
        <div
          className="red"
          style={{ overflow: "hidden", position: "relative" }}
        >
          red
          <br />
          <Button onClick={() => setShowDialog("red3")} ref={refRed3}>
            open dialog
          </Button>
          {showDialog === "red3" && (
            <ModalDialog
              onClose={() => setShowDialog(undefined)}
              triggerRef={refRed3}
              zIndex={9999}
            />
          )}
        </div>
        <div className="green">green</div>
      </>
    </div>
  );
}
