import React, { Component } from "react";
import "./phondo.css";
import phondo1 from "./images/phondo1.jpg";
import phondo2 from "./images/phondo2.jpg";
import phondo3 from "./images/phondo3.jpg";
import phondo4 from "./images/phondo4.jpg";
import phondo5 from "./images/phondo5.jpg";
import phondo6 from "./images/phondo6.jpg";
import phondo7 from "./images/phondo7.jpg";
import phondo8 from "./images/phondo8.jpg";

export default class phondo extends Component {
  render() {
    return (
      <main className="iphondo">
        <div className="bg-phondo"></div>
        <main class="phondo1">
          <header for="name" class="phondo-name">
            iPhondo
          </header>

          <h2>What is iphondo?</h2>

          <p>
            Iphondo in Zulu and ponytail in English refer to synthetic or human
            hair that is attached to natural hair as extensions. The natural
            hair is first blow-dried or relaxed and then slicked back and laid
            using styling gel and Got2b spray to hold it in place. The extension
            is then attached to the natural using different kinds of methods
            depending on what the person wants. The extensions differ in texture
            from silky sleek to being more natural. It is advisable to choose
            the extension that suits your hair type. See below images of the
            variations of iphondo.
          </p>

          <img src={phondo1} class="phondo" />
          <img src={phondo2} class="phondo" />
          <img src={phondo3} class="phondo" />
          <img src={phondo4} class="phondo" />
          <img src={phondo5} class="phondo" />
          <img src={phondo6} class="phondo" />
          <img src={phondo7} class="phondo" />
          <img src={phondo8} class="phondo" />

          <h2>Prices?</h2>

          <p>These types of styles usually cost from R250 – R800.</p>

          <h2>How long does it last?</h2>

          <p>
            Because the natural hair is not completely braided into the
            extensions this kind of style usually only lasts up to 5 weeks
          </p>
        </main>
      </main>
    );
  }
}
