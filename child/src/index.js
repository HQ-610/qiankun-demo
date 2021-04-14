import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const render = () => {
  return ReactDOM.render(<App />, document.getElementById("root"));
};

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

((global) => {
  global["purehtml"] = {
    bootstrap: () => {
      console.log("purehtml bootstrap");
      return Promise.resolve();
    },
    mount: () => {
      console.log("purehtml mount");
      return render();
    },
    unmount: () => {
      console.log("purehtml unmount");
      return Promise.resolve();
    },
  };
})(window);
