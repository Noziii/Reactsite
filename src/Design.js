import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Design.css";

class Design extends Component {
  render() {
    return (
      <main className="Design">
        <main id="home">
          <div className="bg-design"></div>
          <main class="picture">
            <Link to="/wireframe">
              <img
                src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                class="Wire"
                width="400"
                height="400"
              />
            </Link>
            <figcaption class="desc">Wire Frames</figcaption>
          </main>

          <main class="picture">
            <Link to="/styleguide">
              <img
                src="https://images.unsplash.com/photo-1523968984674-42be380a916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=775&q=80"
                class="Guide"
                width="400"
                height="400"
              />
            </Link>
            <figcaption class="desc">Styleguide</figcaption>
          </main>

          <main class="picture">
            <Link to="/references">
              <img
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                class="Planning"
                width="400"
                height="400"
              />
            </Link>
            <figcaption class="desc">References</figcaption>
          </main>
        </main>
      </main>
    );
  }
}

export default Design;
