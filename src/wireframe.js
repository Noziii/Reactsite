import React, { Component } from "react";
import "./wireframe.css";
import { Link } from "react-router-dom";
import wire1 from "./images/IMG-5009.jpg";
import wire2 from "./images/IMG-5012.jpg";
import wire3 from "./images/IMG-5016.jpg";
import wire4 from "./images/IMG-5019.jpg";
import wire5 from "./images/IMG-5021.jpg";
import wire6 from "./images/IMG-5032.jpg";

export default class wireframe extends Component {
  render() {
    return (
      <main className="wireframes">
        <div className="bg-wire"></div>
        <main class="slideshow">
          <section class="Slides">
            <img src={wire1} class="wone" />
          </section>

          <section class="Slides">
            <img src={wire2} class="wtwo" />
          </section>

          <section class="Slides">
            <img src={wire3} class="wthree" />
          </section>

          <section class="Slides">
            <img src={wire4} class="wfour" />
          </section>

          <section class="Slides">
            <img src={wire5} class="wfive" />
          </section>

          <section class="Slides">
            <img src={wire6} class="wsix" />
          </section>
        </main>
        <br />
      </main>
    );
  }
}
