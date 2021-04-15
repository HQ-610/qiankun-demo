import React from "react";
import ReactDOM from "react-dom";
import { initGlobalState, registerMicroApps, start } from 'qiankun';
import { Provider } from 'react-redux'
import App from "./App";
import store from './store'
import sharedState from './shared'

const microAppStateActions = initGlobalState(store)

registerMicroApps([
  {
    name: 'child', // app name registered
    entry: '//localhost:3001',
    container: '#childRoot',
    activeRule: '/child',
    props: {
      sharedState,
      ...microAppStateActions
    }
  },
]);



start();

ReactDOM.render(
  <Provider store={store}><App /></Provider>
  , document.getElementById("root"));
