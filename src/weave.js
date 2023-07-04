import React, { Component } from "react";
import "./weave.css";
import wig from "./images/wig.jpg";
import weavee from "./images/weave.jpg";
import weave1 from "./images/weave1.jpg";
import weave2 from "./images/weave2.jpg";
import weave3 from "./images/weave3.jpg";
import weave4 from "./images/weave4.jpg";
import wig1 from "./images/wig1.jpg";
import wig2 from "./images/wig2.jpg";
import wig3 from "./images/wig3.jpg";
import wig4 from "./images/wig4.jpg";

export default class weave extends Component {
  render() {
    return (
      <main className="weave">
        <div className="bg-weave"></div>
        <main class="weave1">
          <header for="name" class="weave-name">
            Wig/ Weave
          </header>

          <h2>What are wigs and weaves? </h2>

          <p>
            Wigs and weaves are two very different yet similar things a wig is
            basically a hat that you can wear and take off and consists of a wig
            cap that has hair sewn onto it. But a weave is strands of extensions
            that are sewn onto one’s natural hair after it has been braided into
            corn rows. See below the difference between a wig and weave
            respectively (Liming & Liming, 2019)
          </p>

          <img src={wig} class="wig" />
          <img src={weavee} class="weavee" />

          <h2>Wig: </h2>

          <p>
            A wig that is good quality is easier to manage and you can achieve a
            variety of styles with it and change the colours and this prevents
            you from damaging and manipulating your own hair with dyes. Wigs
            also help save you money instead of doing your hair every month or
            two months you can install your wig and change it and have your hair
            protected under the wig in cornrows. The only downside with wigs is
            that they must be installed also every day and it isn’t a good idea
            to sleep or bathe with your wig as it can easily come off. (Liming &
            Liming, 2019)
          </p>

          <img src={wig1} class="wigs" />
          <img src={wig2} class="wigs" />
          <img src={wig3} class="wigs" />
          <img src={wig4} class="wigs" />

          <h2>Weave: </h2>

          <p>
            A weave is more secure because it is sewen onto the natural hair,
            but the downside of a weave is that it can cause hair loss if the
            braiding is too tight, it costs a lot to install and maintain and it
            also gets tangled if the hair isn’t good quality therefore causing
            it not to last long. (Liming & Liming, 2019)
          </p>

          <img src={weave1} class="weaves" />
          <img src={weave2} class="weaves" />
          <img src={weave3} class="weaves" />
          <img src={weave4} class="weaves" />

          <h2>Prices:</h2>

          <p>
            The prices of weaves and wigs differ according to the quality of the
            hair and the installation if you are having either installed.{" "}
          </p>
          <p>Weave: R250 – R2000 and even more </p>
          <p>Wig: R500 – R5000</p>

          <p>References: </p>

          <p>
            Liming, B., & Liming, B. (2019). Weaves vs Wigs vs Hair Extensions:
            Which is Better for You? HairBro.
            https://www.hairbro.com/blogs/hair-tips-care/weaves-vs-wigs-vs-hair-extensions-which-is-better-for-you
          </p>
        </main>
      </main>
    );
  }
}
