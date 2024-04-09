import "./styles.scss";
import { useState, useEffect, createContext, useContext, useRef } from "react";
import { createPortal } from "react-dom";

import { Button } from "../Button";

const ThemeContext = createContext("dark");
const ThemeProvider = ({ children }) => {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
};

const useTheme = () => useContext(ThemeContext);

const ModalDialog = ({ onClose }) => {
  const theme = useTheme();

  useEffect(() => {
    console.log("Theme should be dark, as set in context provider: ", theme);
    console.log("modal re-renders");
  });

  return (
    <div className="modal center" style={{ zIndex: 99, position: "fixed" }}>
      Just a dialog
      <br />
      <br />
      <Button onClick={onClose}>close dialog</Button>
    </div>
  );
};

export default function App() {
  const ref = useRef(null);
  const [mainVisible, setMainVisible] = useState(true);
  const [isNavExpanded, setIsNavExpanded] = useState(true);
  const [showPortalDialog, setShowPortalDialog] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const listener = (e) => {
      console.log(
        "Click events from the modal won't be captured here",
        e.target
      );
    };
    el.addEventListener("click", listener);

    return () => el.removeEventListener("click", listener);
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submit initiated! But not from the dialog :(");
  };

  return (
    <ThemeProvider>
      <form onSubmit={onFormSubmit}>
        <div
          ref={ref}
          className="App"
          onClick={(e) => {
            console.log("click inside the modal should be captured here");
            console.log(e.target);
          }}
        >
          <div className="header">Header is sticky</div>
          <h1>Hello CodeSandbox</h1>
          <Button onClick={() => setIsNavExpanded(!isNavExpanded)}>
            expand/collapse nav
          </Button>
          <br />
          <Button onClick={() => setMainVisible(!mainVisible)}>
            mount/unmount the main part with the dialog
          </Button>
          <div className="layout">
            <div
              className="sidebar"
              style={{
                transform: isNavExpanded
                  ? "translate(0, 0)"
                  : "translate(-300px, 0)",
              }}
            >
              Navigation links go here
            </div>
            {mainVisible && (
              <div
                className="main"
                style={{
                  transform: !isNavExpanded
                    ? "translate(-300px, 0)"
                    : "translate(0, 0)",
                }}
              >
                main part
                <br />
                <Button onClick={() => setShowPortalDialog(true)}>
                  open portalled dialog
                </Button>
                <Button onClick={() => setShowDialog(true)}>
                  open not-portalled dialog
                </Button>
                {showPortalDialog &&
                  createPortal(
                    <ModalDialog onClose={() => setShowPortalDialog(false)} />,
                    document.getElementById("root")
                  )}
                {showDialog && (
                  <ModalDialog onClose={() => setShowDialog(false)} />
                )}
              </div>
            )}
          </div>
        </div>
      </form>
    </ThemeProvider>
  );
}
