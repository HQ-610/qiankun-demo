import './public-path';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import store from './store'
import App from "./App";

const render = (props = {}) => {
  const { container } = props;
  ReactDOM.render(
    <Provider store={store}>
      <App {...props} />
    </Provider>
    , container ? container.querySelector('#root') : document.querySelector('#root'));
};

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {

}

export async function mount(props) {
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
