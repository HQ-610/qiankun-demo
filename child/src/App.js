import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import User from "./User";
import GlobalStateContext from './GlobalStateContext'

function App(props) {
  const [globalState, setGlobalState] = useState(props.sharedState)
  useEffect(() => {
    if (window.__POWERED_BY_QIANKUN__) {
      props.onGlobalStateChange((state) => {
        setGlobalState(state)
      }, true);

      return props.offGlobalStateChange()
    }

  }, [])
  return (
    <GlobalStateContext.Provider value={globalState}>
      <Router basename={window.__POWERED_BY_QIANKUN__ ? "/child" : "/"}>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">子应用 Home</Link>
              </li>
              <li>
                <Link to="/about">子应用 About</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

    </GlobalStateContext.Provider>
  );
}

export default App;
