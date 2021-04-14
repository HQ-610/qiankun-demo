import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About'
import Home from './Home'
import User from './User'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/user">加载子应用 User</Link>
            </li>
            <li>
              <Link to="/child">加载子应用 Home</Link>
            </li>
            <li>
              <Link to="/child/about">加载子应用 About</Link>
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
          {/* 第一次子应用没匹配到都走到这儿来了 */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
