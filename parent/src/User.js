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
    });
    return () => {
      microApp.unmount();
    };
  }, []);
  return <div ref={containerRef}></div>;
}

export default User;
