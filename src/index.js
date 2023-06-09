import ReactDOM from "react-dom";
import React from "react";
import Nav from "./Nav";
import App from "./App";
import { Router } from "react-router-dom";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
