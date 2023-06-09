import ReactDOM from "react-dom";
import React from "react";
import Nav from "./Nav";
import { HashRouter as Router } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Nav />
  </Router>,
  document.getElementById("root")
);
