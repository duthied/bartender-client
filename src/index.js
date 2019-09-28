import React from "react";
import ReactDOM from "react-dom";

import Pages from "./pages";
import injectStyles from "./styles";

injectStyles();

ReactDOM.render(<Pages />, document.getElementById("root"));
