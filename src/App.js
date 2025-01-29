import "./App.css";
import { useEffect, useRef,  } from "react";
import WebViewer from "@pdftron/webviewer";

const SavedInfo = ({ color }) => (
  <div style={{ width: "46px", textAlign: "center" }}>
    <svg
      fill={color}
      width="24"
      height="24"
      viewBox="0 0 1792 1792"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1671 566q0 40-28 68l-724 724-136 136q-28 28-68 28t-68-28l-136-136-362-362q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 295 656-657q28-28 68-28t68 28l136 136q28 28 28 68z" />
    </svg>
  </div>
);

function App() {

  const viewer = useRef(null);
  const test = useRef(null);

  useEffect(() => {
    if (!test.current) {
      test.current = "test";
      WebViewer(
        {
          path: "/webviewer",
          licenseKey: "Informatique-MTF SA (imtf.com):OEM:HYPERSUITE/5 Folder Manager::B+:AMS(20240830):E7A5EDAD0477780A0360B13AC982527860613FE98B14F592A9C7D6C24A7220DE22DABEF5C7",
          initialDoc: "/test.pdf",
        },
        viewer.current
      ).then((instance) => {
        instance.UI.setHeaderItems(header => {
          header.push({
            dataElement: "savedButton",
            type: "customElement",
            render: () => (
              <SavedInfo color="green" />
            ),
          });
        });
      });
    }
  }, []);

  return (
    <div className="MyComponent">
      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </div>
  );
}

export default App;
