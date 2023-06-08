import ReactDOM from "react-dom";
import React from "react";
import Nav from "./Nav";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Nav />
  </BrowserRouter>,
  document.getElementById("root")
);
