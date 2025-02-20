import React, {
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

import {
  AnotherVerySlowComponent,
  VerySlowComponent,
} from "./VerySlowComponents";
import "./styles.css";

const defaultState = { isNavExpanded: false };
// store the state here
const ContextData = React.createContext(defaultState);
// store the open/close functions here
const ContextApi = React.createContext({
  open: () => {},
  close: () => {},
  toggle: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case "open-sidebar":
      return { ...state, isNavExpanded: true };
    case "close-sidebar":
      return { ...state, isNavExpanded: false };
    case "toggle-sidebar":
      // we'll have access to the old value here - it's our "state"
      // so just flip it around
      return { ...state, isNavExpanded: !state.isNavExpanded };
  }

  return state;
};

const NavigationController = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // that one has a dependency on state
  const data = useMemo(() => ({ isNavExpanded: state.isNavExpanded }), [state]);

  // that one never changes - no dependencies
  const api = useMemo(() => {
    return {
      open: () => dispatch({ type: "open-sidebar" }),
      close: () => dispatch({ type: "close-sidebar" }),
      toggle: () => dispatch({ type: "toggle-sidebar" }),
    };
    // don't depend on the state directly anymore!
  }, []);

  return (
    <ContextData.Provider value={data}>
      <ContextApi.Provider value={api}>{children}</ContextApi.Provider>
    </ContextData.Provider>
  );
};

const useNavigationData = () => useContext(ContextData);
const useNavigationApi = () => useContext(ContextApi);

const AdjustableColumnsBlock = () => {
  const { isNavExpanded } = useNavigationData();
  return isNavExpanded ? (
    <div>two block items here</div>
  ) : (
    <div>three block items here</div>
  );
};

const SomeComponent = () => {
  const { toggle } = useNavigationApi();

  useEffect(() => {
    console.info(
      "SomeComponent won't re-render on navigation expand/collapse, even though it uses Context"
    );
  });

  return (
    <div>
      <button onClick={toggle}>Toggle nav</button>
    </div>
  );
};

const MainPart = () => {
  return (
    <>
      <SomeComponent />
      <VerySlowComponent />
      <AnotherVerySlowComponent />
      <AdjustableColumnsBlock />
    </>
  );
};

const ExpandButton = () => {
  const { isNavExpanded } = useNavigationData();
  const { toggle } = useNavigationApi();

  useEffect(() => {
    console.info(
      "Button that uses Context data re-renders. But SomeComponent won't"
    );
  });

  return (
    <button onClick={toggle}>
      {isNavExpanded ? "collapse <" : "expand >"}
    </button>
  );
};

const SidebarLayout = ({ children }) => {
  const { isNavExpanded } = useNavigationData();
  return (
    <div className="left" style={{ flexBasis: isNavExpanded ? "50%" : "20%" }}>
      {children}
    </div>
  );
};

const Sidebar = () => {
  return (
    <SidebarLayout>
      {/* this one will control the expand/collapse */}
      <ExpandButton />

      <ul>
        <li>
          <a href="#">some links</a>
        </li>
      </ul>
    </SidebarLayout>
  );
};

const Layout = ({ children }) => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <NavigationController>
      <div className="three-layout">{children}</div>
    </NavigationController>
  );
};

const Page = () => {
  return (
    <Layout>
      <Sidebar />
      <MainPart />
    </Layout>
  );
};

export default function App() {
  return (
    <>
      <h3>
        Very slow "Page" component - click on expand/collapse to toggle nav
      </h3>
      <p>
        Those components that use only API won't re-render on nav
        expand/collapse anymore
      </p>
      <Page />
    </>
  );
}
