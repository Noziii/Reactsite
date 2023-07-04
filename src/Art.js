import React, { Component } from "react";
import "./Art.css";
import headright from "./images/collage9.jpg";
import headleft from "./images/collage7.jpg";
import lefteye from "./images/collage8.jpg";
import righteye from "./images/collage6.jpg";
import mouth from "./images/collage22.jpg";
import chest from "./images/collage17.jpg";
import { Link } from "react-router-dom";

class Art extends Component {
  render() {
    return (
      <main className="Art">
        <div className="bg-art"></div>

        <main className="art">
          <Link to="/cornrows">
            <img src={headright} class="headright" />
          </Link>

          <Link to="/natural">
            <img src={headleft} class="headleft" />
          </Link>
          <Link to="/phondo">
            <img src={lefteye} class="lefteye" />
          </Link>
          <Link to="/weave">
            <img src={righteye} class="righteye" />
          </Link>
          <Link to="braids">
            <img src={mouth} class="mouth" />
          </Link>
        </main>
      </main>
    );
  }
}

export default Art;
