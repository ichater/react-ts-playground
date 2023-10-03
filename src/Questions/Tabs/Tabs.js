import tabStyles from "./Tabs.module.css";
import { useState } from "react";

const data = [
  {
    id: 0,
    title: "JavaScript",
    text: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    active: true,
  },
  {
    id: 1,
    title: "CSS",
    text: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    active: false,
  },
  {
    id: 2,
    title: "HTML",
    text: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    active: false,
  },
];

function Tab({ title, active, id, handleClick }) {
  return (
    <button
      onClick={() => {
        handleClick(id);
      }}
      className={`${tabStyles.btn} ${active && tabStyles.btnActive}`}
    >
      {title}
    </button>
  );
}

export default function Tabs() {
  const [tabsState, setTabsState] = useState(data);

  const handleClick = (id) => {
    const updatedTabs = tabsState.map((tab) => ({
      ...tab,
      active: tab.id === id,
    }));
    setTabsState(updatedTabs);
  };

  return (
    <div>
      <div>
        {tabsState.map((tab) => (
          <Tab
            key={tab.id}
            handleClick={handleClick}
            title={tab.title}
            active={tab.active}
            id={tab.id}
          />
        ))}
      </div>
      <div>
        <p>{tabsState.filter((tab) => tab.active)[0].text}</p>
      </div>
    </div>
  );
}
