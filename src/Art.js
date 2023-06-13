import React, { Component } from "react";
import "./Art.css";
import headright from "./images/collage9.jpg";
import headleft from "./images/collage7.jpg";
import lefteye from "./images/collage8.jpg";
import righteye from "./images/collage6.jpg";
import mouth from "./images/collage12.jpg";
import chest from "./images/collage17.jpg";
import { Link } from "react-router-dom";

class Art extends Component {
  render() {
    return (
      <main className="Art">
        <div className="bg-art"></div>
        <main class="art">
          <img src={headright} class="headright" />
          <Link>
            <img src={headleft} class="headleft" />
          </Link>
          <img src={lefteye} class="lefteye" />
          <img src={righteye} class="righteye" />
          <img src={mouth} class="mouth" />
          <img src={chest} class="chest" />
        </main>
      </main>
    );
  }
}

export default Art;
