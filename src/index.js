import "./index.css";
if (window.nw) {
  console.log("nw", nw);
  console.log("window.process", window.process?.versions?.ares);
  console.log("nw.require.os.cpus: ", nw.require("os").cpus());
  document.write("(nw) Look console by F12");
  document.write("Update your code in src, nw will HMR");
} else {
  document.write("is web versions or somthing wrong");
}

import React from "react";
import ReactDom from "react-dom";

ReactDom.render(<div>hellow world</div>, document.getElementById("root"));
