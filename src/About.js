import React, { Component } from "react";
import "./About.css";
import aboutimg from "./images/About1.jpg";

export default class About extends Component {
  render() {
    return (
      <main className="About">
        <div class="bg-about"></div>

        <div className="about">
          <p className="ubs">
            <header for="name" class="name-about">
              About:
            </header>
            This site aims to explore the magnificent wonder that is black
            womens hair. By giving the run down on the basics of black hair
            care, different hair styles as well as their names and the different
            hair types. So basically this site is a small sneak peek into the
            the world and the reality of black womens hair. And when you see a
            black women today remember NOT TO TOUCH HER HAIR.
          </p>
          <img src={aboutimg} class="aboutimg" />
        </div>
      </main>
    );
  }
}
