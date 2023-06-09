import React, { Component } from "react";
import "./Art.css";

class Art extends Component {
  render() {
    return (
      <main className="Art">
        <div className="bg-art"></div>
        <main class="art">
          <img src="images/collage9.jpg" class="headright" />
          <a href="afro">
            <img src="images/collage7.jpg" class="headleft" />
          </a>
          <img src="images/collage8.jpg" class="lefteye" />
          <img src="images/collage6.jpg" class="righteye" />
          <img src="images/collage12.jpg" class="mouth" />
          <img src="images/collage17.jpg" class="chest" />
        </main>
        <footer class="footer">
          <p>
            <strong>Email:</strong> miss.nozii.sithole@gmail.com
          </p>
          <p>
            <strong>Tel:</strong> (065) 744 9243
          </p>
        </footer>
      </main>
    );
  }
}

export default Art;
