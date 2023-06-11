import React, { Component } from "react";

import { Routes, Route, Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import Home from "./Home";
import Design from "./Design";
import Theory from "./Theory";
import Art from "./Art";
import blogone from "./blogone";
import blogtwo from "./blogtwo";
import styleguide from "./styleguide";

import "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openLinks: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState((prevState) => ({
      openLinks: !prevState.openLinks,
    }));
  }

  render() {
    return (
      <nav className="navbar">
        <nav className="nav">
          <ul>
            <li>
              <Link exact activeClassName="active" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link exact activeClassName="active" to="/Theory">
                Theory
              </Link>
            </li>

            <li>
              <Link exact activeClassName="active" to="/Art">
                Art
              </Link>
            </li>

            <li>
              <Link exact activeClassName="active" to="/Design">
                Design
              </Link>
            </li>
          </ul>
        </nav>
        {/*<nav
          className="hiddenLinks"
          id={this.state.openlinks ? "open" : "close"}
        >
          <ul>
            <li>
              <Link exact activeClassName="active" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link exact activeClassName="active" to="/Theory">
                Theory
              </Link>
            </li>

            <li>
              <Link exact activeClassName="active" to="/Art">
                Art
              </Link>
            </li>

            <li>
              <Link exact activeClassName="active" to="/Design">
                Design
              </Link>
            </li>
          </ul>
          <button onClick={this.toggleNav}>
            <ReorderIcon />
          </button>
    </nav>*/}
      </nav>
    );
  }
}

export default Nav;
