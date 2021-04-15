import { loadMicroApp } from "qiankun";
import { useEffect, useRef } from "react";

function User() {
  const containerRef = useRef()
  let microApp;
  useEffect(() => {
    microApp = loadMicroApp({
      name: "childUser",
      entry: "//localhost:3001/child/user",
      container: containerRef.current,
    }, {
      fetch(url, ...args) {
        // 给指定的微应用 entry 开启跨域请求
        return window.fetch(url, {
          ...args,
          mode: 'cors',
          credentials: 'include',
        })
      }
    })
    return () => {
      microApp.unmount();
    };
  }, []);
  return <div ref={containerRef}></div>;
}

export default User;
