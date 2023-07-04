import React, { Component } from "react";
import "./cornrows.css";
import braids1 from "./images/braids1.jpg";
import cornrows2 from "./images/cornrows2.jpg";
import bonnet from "./images/bonnet.jpg";
import duku from "./images/duku.jpg";
import cornrows3 from "./images/cornrows3.jpg";
import cornrows4 from "./images/cornrows4.jpg";
import cornrows5 from "./images/cornrows5.jpg";
import cornrows6 from "./images/cornrows6.jpg";
import cornrows7 from "./images/cornrows7.jpg";
import cornrows8 from "./images/cornrows8.jpg";
import cornrows9 from "./images/cornrows9.jpg";
import cornrows10 from "./images/cornrows10.jpg";

export default class cornrows extends Component {
  render() {
    return (
      <main className="cornrows">
        <div className="bg-cornrows"></div>
        <main class="cornrows1">
          <header for="name" class="cornrows-name">
            Flat braids/ Cornrows
          </header>
          <h2>What are flat braids or cornrows? </h2>

          <p>
            This type of hair falls into the protective style category.
            Protective hairstyles are hairstyles designed to protect black
            women’s natural hair and help it grow. Flat braids and cornrows
            differ from normal braids, braids are plaited in singulars and hang
            freely, and cornrows are braided to the scalp. Cornrows can be
            braided with one’s natural hair or using hair extensions. See
            example below of the difference between braids and cornrows
            respectively(Sandeen, 2022)
          </p>

          <img src={braids1} class="b1" />
          <img src={cornrows2} class="c2" />

          <h2>How long do they last? </h2>

          <p>
            Depending on how well one takes care of their hair a protective
            style such as flat braids can last up to 2 months. And that’s only
            if you make sure you protect your hairstyle especially when you
            sleep by sleeping with either a bonnet or a duku, see figures below
            respectively. And avoid having water meet your hair causing it to
            frizz out. (Sandeen, 2022)
          </p>
          <img src={bonnet} class="bonnet" />
          <img src={duku} class="duku" />

          <h2>
            Different types of patterns and hairstyles are created with corn
            rows and flat braiding:
          </h2>

          <img src={cornrows3} class="c" />
          <img src={cornrows4} class="c" />
          <img src={cornrows5} class="c" />
          <img src={cornrows6} class="c" />
          <img src={cornrows7} class="c" />
          <img src={cornrows8} class="c" />
          <img src={cornrows9} class="c" />
          <img src={cornrows10} class="c" />

          <h2>Prices? </h2>

          <p>
            The average cornrow and flat braids range from R50 – R600 depending
            on what kind of style you want and whether you are using extensions
            or not. If you are not using extensions and are braiding your
            natural hair it’s cheaper, but the more extravagant the hairstyle
            the more expensive it is and if you add in decorations such as beads
            it is usually an extra R20 -R100.
          </p>

          <p>References:</p>

          <p>
            Sandeen, D. (2022). A Step-By-Step Guide to Braiding Cornrows.
            Byrdie. https://www.byrdie.com/how-to-braid-cornrows-400296{" "}
          </p>
        </main>
      </main>
    );
  }
}
