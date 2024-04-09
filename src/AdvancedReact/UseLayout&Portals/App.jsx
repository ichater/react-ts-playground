import React, { useState } from "react";
import "./styles.scss";
import Stacking from "./Stacking/App";
import Portals from "./Portals/App";
import UseLayout from "./UseLayout/App";
import Final from "./FinalExample/App";

export default function App() {
  const [tab, setTab] = useState("final");
  return (
    <div className="container">
      <div className="nav">
        <button onClick={() => setTab("useLayout")}>useLayout</button>
        <button onClick={() => setTab("stacking")}>Stacking</button>
        <button onClick={() => setTab("portal")}>Portals</button>
        <button onClick={() => setTab("final")}>Final Example</button>
      </div>
      {tab === "useLayout" && <UseLayout />}
      {tab === "stacking" && <Stacking />}
      {tab === "portal" && <Portals />}
      {tab === "final" && <Final />}
    </div>
  );
}
