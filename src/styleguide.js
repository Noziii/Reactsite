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
              for the heading of my blog pages, as well as my art pages because
              the font is very feminine which is the style I am trying to
              portray throughout my site because it is directed at women
              ,particularly black women. Raleway I used for the body of my blog
              posts as well as the figure captions on the design page because
              the font is very readable eligible users can easily see what has
              been written.
              <br />
              Fantasy copperplate I used for the heading of my home page because
              it is a very rigid and strong font which is what i was trying to
              get across from the home page title it is supposed to be
              aggressive and in your face because it is a command/instruction.
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
              white,grey, pink and brown . The pink is dominant in the menu
              section and my art section background. I made use of minimal
              colours to keep an aesthetically pleasing look that is
              sophisticated and not distracting to the eye.
              <br />
              The reason I made use of these specific colours is to get across
              the feel of my sight to users. The pink, white and cream/beige
              colours are there to create a feminine feel to the site beacuse
              the site is related to women and womens hair and I associate these
              colours with femininity and beauty.
              <br />
              The black and grey colours are there to break the overly feminine
              colours and give the site a nice balance of strong and feminine
              which is what I was trying to achieve.
              <br />
              The site also has a variety of the colour drown due to the
              background images and other images on the sight that show and
              represent balck women. I was aiming to make sure that brown is a
              dominating colour becasue the site is about black women and their
              hair.
            </p>

            <p class="core">Other design choices:</p>
            <p class="core">
              Footer:I intially had a footer on my site but it was difficult to
              style the footer and get it to stay fixed on the pages.Instead the
              footer moved around with the contnent or sometimes rendered on top
              of the content on the pages. I therefore had to remove it, I
              understand the a footer needs to be on the site to make sure the
              site does not feel endless.But unfortunately I failed to implement
              it properly.
            </p>
            <p class="core">Buttons:</p>

            <p class="core">
              I made use of next and previous buttons on my blog pages so that
              users can easily navigate through the blogs without having to
              leave the page completely causing the user to track back and forth
              between the pages, but rather can view them one after the other.
            </p>
          </main>
        </main>
      </main>
    );
  }
}

export default styleguide;
