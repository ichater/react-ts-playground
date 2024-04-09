import "./styles.scss";
import { useState } from "react";
import { createPortal } from "react-dom";

import { Button } from "../Button";

const ModalDialog = ({ onClose }) => {
  return (
    <div className="modal center" style={{ zIndex: 99, position: "fixed" }}>
      Dialog should be in the middle of the screen
      <br />
      <br />
      and it is!
      <br />
      <br />
      <Button onClick={onClose}>close dialog</Button>
    </div>
  );
};

export default function App() {
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="App">
      <div className="header">Header is sticky</div>

      <Button onClick={() => setIsNavExpanded(!isNavExpanded)}>
        expand/collapse nav
      </Button>
      <div className="layout1">
        <div
          className="sidebar"
          style={{
            transform: isNavExpanded
              ? "translate(0, 0)"
              : "translate(-300px, 0)",
            height: 3000,
          }}
        >
          Navigation links go here
        </div>
        <div
          className="main1"
          style={{
            transform: !isNavExpanded
              ? "translate(-300px, 0)"
              : "translate(0, 0)",
          }}
        >
          main part
          <br />
          <Button onClick={() => setShowDialog(true)}>open fixed dialog</Button>
          {showDialog &&
            createPortal(
              <ModalDialog onClose={() => setShowDialog(false)} />,
              document.getElementById("root")
            )}
        </div>
      </div>
    </div>
  );
}
