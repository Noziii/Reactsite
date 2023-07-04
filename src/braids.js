import React, { Component } from "react";
import "./braids.css";
import knotless from "./images/knotless.jpg";
import normal from "./images/normal.jpg";
import small from "./images/small.jpg";
import medium from "./images/medium.jpg";
import large from "./images/large.jpg";
import jumbo from "./images/jumbo.jpg";
import bohemian from "./images/bohemian.jpg";
import french from "./images/french.jpg";
import fulani from "./images/fulani.jpg";
import passion from "./images/passion.jpg";
import braids3 from "./images/braids3.jpg";
import braids5 from "./images/braids5.jpg";
import braids6 from "./images/braids6.jpg";
import braids7 from "./images/braids7.jpg";

export default class braids extends Component {
  render() {
    return (
      <main className="braids">
        <div className="bg-braids"></div>
        <main class="braids1">
          <header for="name" class="braids-name">
            Braids
          </header>
          <h2> What are braids? </h2>

          <p>
            Braids are singular plaits that have been braided to a black women’s
            natural hair and hang freely, they come in different shapes,
            colours, sizes and lengths. Braids come in very diverse forms and
            all with different names. (Allen, 2022)
          </p>

          <p>
            Such as Knotless braid which refers to the way in which the
            extensions are attached to the natural hair, and you have those
            which are NOT knotless see images below respectively. (Allen, 2022)
          </p>

          <img src={knotless} class="knotless" />
          <img src={normal} class="normal" />

          <p>
            You can get them in different sizes small, medium, large and jumbo,
            see images below respectively. As well as different lengths from
            bob, shoulder, mid-back, bum length, knee length, and even ankle
            length if you dare to.
          </p>

          <img src={small} class="sizes" />
          <img src={medium} class="sizes" />
          <img src={large} class="sizes" />
          <img src={jumbo} class="sizes" />

          <p>
            Different braid hairstyles also have their different names such as
            Bohemian twists, French curls, Fulani braids, Passion Twist (See
            images below respectively) and the list goes on and on. (Allen,
            2022)
          </p>

          <img src={bohemian} class="styles" />
          <img src={french} class="styles" />
          <img src={fulani} class="styles" />
          <img src={passion} class="styles" />

          <h2>Braids:</h2>

          <p>
            Braids fall under the protective style category which helps black
            women’s hair grow and keep it protected. The only downside to braids
            is that if they are too tight, they can cause hair to start falling
            out because of the tension it is advisable to not have your braids
            done too tightly. (Allen, 2022)
          </p>

          <h2>How long do they last?</h2>

          <p>
            Braids can last for a very long time if they are taken care of
            properly it is advisable to always sleep with a bonnet or a duku on
            to protect the hairstyle and sometimes even during the day.
          </p>

          <img src={braids3} class="ty" />
          <img src={braids5} class="ty" />
          <img src={braids6} class="ty" />
          <img src={braids7} class="ty" />

          <h2>Prices:</h2>

          <p>
            Braids prices are dependent solely on the type of hairstyle you want
            the size, length, and sometimes even the colour. They go from R300 –
            R1800.
          </p>

          <p>References:</p>

          <p>
            Allen, M. (2022). The Fascinating History of Braids You Never Knew
            About. Byrdie. https://www.byrdie.com/history-of-braids
          </p>
        </main>
      </main>
    );
  }
}
