import React from "react";
import ReactDOM from "react-dom";
import { registerMicroApps, start } from 'qiankun';
import { Provider } from 'react-redux'
import App from "./App";
import store from './store'
import microAppStateActions from './microAppStateActions'

registerMicroApps([
  {
    name: 'child', // app name registered
    entry: '//localhost:3001',
    container: '#childRoot',
    activeRule: '/child',
    props: {
      sharedState: store.getState(),
      ...microAppStateActions
    }
  },
]);



start();

ReactDOM.render(
  <Provider store={store}><App /></Provider>
  , document.getElementById("root"));
