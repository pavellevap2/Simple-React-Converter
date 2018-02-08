import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import Converter from "./Components/Converter/Converter";

ReactDOM.render(<Converter />, document.getElementById("root"));
registerServiceWorker();
