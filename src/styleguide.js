import React, { Component } from "react";
import "./styleguide.css";

class styleguide extends Component {
  render() {
    return (
      <main className="styleguide">
        <div className="bg-styleguide"></div>
        <header for="name" class="name">
          Style Guide:
        </header>
        <main class="every">
          <main class="core">
            <p class="one0">Lucida Handwriting</p>
            <p class="two0">Raleway</p>
            <p class="three0">Fantasy, copperplate</p>
            <p class="core">
              I made use of a good range of fonts, I used the Lucida handwriting
              for the heading of my blog pages. Raleway I used for the body of
              my blog posts as well as the figure captions on the design page
              and Fantasy copperplate i used for the heading of my home page.
              The reason why I made use of these fonts is because I found them
              readable and legible. And because they are aesthetically pleasing
              and therefore fit into the theme of my site. Each font indicates
              something different and is consistent throughout the entire
              website.
            </p>
            <p class="core">Colour Palette:</p>

            <p class="four0">rgb(233, 228, 228);</p>
            <p class="five0">black</p>
            <p class="six0">white</p>
            <p class="seven0">rgb(31, 31, 31);</p>
            <p class="eight0">rgb(227, 198, 215)</p>
            <p class="nine0">rgb(214, 176, 176)</p>

            <p class="core">
              My site does not make use of a wide range of colours mainly black,
              white,grey and pink. The pink is dominant in the menu section and
              my art section background. I made use of minimal colours to keep
              an aesthetically pleasing look that is sophisticated and not
              distracting to the eye.
            </p>

            <p class="core">Other design choices:</p>
            <p class="core">
              Footer:I added in a footer so my pages do not feel endless
            </p>
            <p class="core">Buttons:</p>

            <p class="core">
              I made use of next and previous buttons on my blog pages so that
              users can easily navigate through the blogs without having to
              leave the page completely. As well as on my wireframes.
            </p>
          </main>
        </main>
      </main>
    );
  }
}

export default styleguide;
