import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import About from './About'
import Home from './Home'
import User from './User'
import './App.css'
import microAppStateActions from './microAppStateActions'

function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  // useEffect(() => {
  //   microAppStateActions.onGlobalStateChange((state, prev) => {
  //     console.log('主应用 onGlobalStateChange', state, prev)
  //   }, true)
  // }, [])
  return (
    <Router>
      <div className="parent-container">
        <nav className="parent-nav">
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
        <div className="parent-content" id="childRoot">
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

      </div>
      <div className="global-state-manage">
        <div>数据共享 demo</div>
        <div>姓名：{state.name}</div>
        <button onClick={() => dispatch({ type: 'changeName', payload: state.name === 'hjh' ? 'lh' : 'hjh' })}>修改名称</button>
        <div>年龄：{state.age}</div><button onClick={() => dispatch({ type: 'changeAge', payload: state.age === 1 ? 18 : state.age - 1 })}>修改年龄</button>
      </div>
    </Router>
  );
}

export default App;
