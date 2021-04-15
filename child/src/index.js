import './public-path';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './store'
import App from "./App";

const initialState = { globalState: null };

function reducer(state, action) {
  switch (action.type) {
    case 'setGlobleState':
      return { ...state, globalState: action.payload };
    default:
      return state
  }
}

const render = (props = {}) => {
  console.log(props)
  const { container } = props;
  ReactDOM.render(
    <Provider store={window.__POWERED_BY_QIANKUN__ ? props.sharedStore : store}>
      <App />
    </Provider>
    , container ? container.querySelector('#root') : document.querySelector('#root'));
};

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {

}

export async function mount(props) {
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log('onGlobalStateChange', state, prev);
  }, true);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
