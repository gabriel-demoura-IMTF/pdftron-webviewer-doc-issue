import "./App.css";
import { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";

function App() {
  const viewer = useRef(null);
  const instance = useRef(null);

  useEffect(() => {
    if (!instance.current) {
      instance.current = "test";
      WebViewer(
        {
          path: "/webviewer",
          licenseKey: "YOUR_LICENSE_KEY",
          initialDoc: "/test.doc",
        },
        viewer.current
      );
    }
  }, []);

  return (
    <div className="MyComponent">
      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;
