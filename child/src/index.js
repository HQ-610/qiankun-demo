import './public-path';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './store'
import App from "./App";
import GlobalStateContext from './GlobalStateContext'

const render = (props = {}) => {
  const { container } = props;
  ReactDOM.render(
    <Provider store={store}>
      {
        window.__POWERED_BY_QIANKUN__ ? (
          <GlobalStateContext.Provider value={props.sharedState?.getGlobalStore()}>
            <App />
          </GlobalStateContext.Provider>
        ) : (<App />)
      }
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
