import React, { Component } from "react";

import { Route, Routes, NavLink } from "react-router-dom";

import Design from "./Design";
import Home from "./Home";
import Theory from "./Theory";
import Art from "./Art";
import blogone from "./blogone";
import blogtwo from "./blogtwo";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <nav className="nav">
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink exact activeClassName="active" to="/Theory">
                Theory
              </NavLink>
            </li>

            <li>
              <NavLink exact activeClassName="active" to="/Art">
                Art
              </NavLink>
            </li>

            <li>
              <NavLink exact activeClassName="active" to="/Design">
                Design
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="Theory" Component={Theory} />
          <Route exact path="Art" Component={Art} />
          <Route exact path="Design" Component={Design} />
          <Route exact path="blogone" Component={blogone} />
          <Route exact path="blogone" Component={blogtwo} />
        </Routes>
      </nav>
    );
  }
}

export default Nav;
