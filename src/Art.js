import React, { Component } from "react";
import "./Art.css";

class Art extends Component {
  render() {
    return (
      <main className="Art">
        <div className="bg-art"></div>
        <main class="art">
          <img src="" class="headright" />
          <a href="afro">
            <img src="" class="headleft" />
          </a>
          <img src="" class="lefteye" />
          <img src="" class="righteye" />
          <img src="" class="mouth" />
          <img src="" class="chest" />
        </main>
        <footer class="footer1">
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
