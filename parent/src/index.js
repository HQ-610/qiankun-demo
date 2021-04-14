import React from "react";
import ReactDOM from "react-dom";
import { registerMicroApps, start } from 'qiankun';
import App from "./App";

registerMicroApps([
  {
    name: 'child', // app name registered
    entry: '//localhost:3001',
    container: '#childRoot',
    activeRule: '/child',
  },
]);

start();

ReactDOM.render(<App />, document.getElementById("root"));
