import React, { Component } from "react";
import "./blogthree.css";
import { Link } from "react-router-dom";
import hair1 from "./images/050F1386-BD64-4B29-85A1-3DDD5F4C2C04.jpg";
import hair2 from "./images/IMG-5152.jpg";
import hair3 from "./images/IMG-7498.jpg";
import hair4 from "./images/IMG-7364.jpg";
import collage from "./images/collage.jpg";

export default class blogthree extends Component {
  render() {
    return (
      <main className="blogthree">
        <Link to="/blogtwo" class="prev">
          &laquo;{" "}
        </Link>
        <Link to="/blogfour" class="next">
          {" "}
          &raquo;
        </Link>
        <div className="bg3"></div>
        <main class="three">
          <header for="name" class="name3">
            My web art
          </header>
          <p>11 April 2023</p>
          <p>
            For my Web art, I have settled on focusing on black women’s hair as
            an art form because it can take on many different forms, shapes,
            lengths, and colours like artwork. And overall, it is beautiful
            which is my focus for my artwork, aesthetics. See examples of below
            of the fluidity and ever changing hair of black women (the women
            being me)
          </p>

          <img src={hair1} class="hair" />
          <img src={hair2} class="hair" />
          <img src={hair3} class="hair" />
          <img src={hair4} class="hair" />
          <p>
            I have decided to create a portrait collage consisting of different
            hairstyles black women can do. I want the different images of the
            collage to be clickable which is where the interactivity will come
            into play with my artwork. <b>See the example below.</b>
          </p>
          <img src={collage} class="collage" />

          <p>
            The user will be able to click on the image and find out information
            about that specific hairstyle how to do it, how to take care of it,
            how long it usually takes to get done, how long it lasts, and how to
            take care of it. The information provided will be from my own
            knowledge as well as research.
          </p>

          <p>Refrences</p>
          <p>
            Gomez, B. C. (2020, February 5). Crafting a Cutout Collage Layout
            with CSS Grid and Clip-path | Codrops. Retrieved from
            https://tympanus.net/codrops/2020/02/05/crafting-a-cutout-collage-layout-with-css-grid-and-clip-path/
          </p>
        </main>
      </main>
    );
  }
}
