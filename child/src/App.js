import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import User from "./User";

function App() {
  return (
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
  );
}

export default App;
