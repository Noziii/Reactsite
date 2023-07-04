import React, { Component } from "react";
import "./natural.css";
import hairtype from "./images/P-CurlyHairType-ImagePrep-1080x662.jpg";
import washday from "./images/wash day.jpg";
import fro1 from "./images/cornrows.jpg";
import fro2 from "./images/bantuknots.jpg";
import fro3 from "./images/twists.jpg";
import fro4 from "./images/braids.jpg";
import afros1 from "./images/Afro1.jpg";
import afros2 from "./images/Afro2.jpg";
import afros3 from "./images/Afro3.jpg";

export default class natural extends Component {
  render() {
    return (
      <main className="natural">
        <div className="bg-natural"></div>
        <main class="natural1">
          <header for="name" class="natural-name">
            Natural hair
          </header>
          <h2>What is Natural Hair</h2>
          <p>
            Having natural hair is the most beautifully chaotic way to live your
            life, ask me I know. Natural hair refers to hair that has NOT been
            manipulated by chemicals, straighteners, relaxers, and texturizers.
            Although one can still go back to having natural hair even after
            manipulating it, sometimes all it takes is pouring a little bit of
            water on your hair and it immediately bounces back to its natural
            state. Natural black hair also comes in different types, lengths,
            and textures. Usually ranging from wavy to kinky- coily, and some
            black women have naturally straight hair. (Sandeen, 2022a)
          </p>

          <img src={afros1} class="Afro" />
          <img src={afros2} class="Afro" />
          <img src={afros3} class="Afro" />

          <p>
            Natural hair comes in different types it is important for black
            women to understand what their hair types are to know how to take
            care of their hair and what products they need. See the figure
            below. Black women’s hair commonly ranges from type 3A to 4C which
            is curly to kinky. (Cosmetize, 2022)
          </p>

          <img src={hairtype} class="type" />

          <h2>Taking care of Natural hair:</h2>

          <p>
            This right here is the part-time job I would suggest nobody signs up
            for, because natural hair comes in different types some are harder
            to take care of than others, my hair falls into the 4B - 4C
            spectrum, which is not as easy to manage, and is also very fragile.
            Most natural hair is fragile, so it is usually advisable to not
            manipulate your natural hair by straightening it, relaxing it, and
            applying too much tension to it with tight hairstyles which causes
            it to fall out and your hairline to recede. (Sandeen, 2022a)
          </p>

          <p>
            Because of its delicate nature natural hair requires a lot of
            moisturizing, applying oils to help with growth, and getting
            treatments to maintain its overall health. There are a hundred
            methods of taking care of natural hair and different products that
            you can buy at the store or even make at home. Buying products at
            the store usually costs an arm and a leg. I spend approximately
            R1000 a month on hair products to maintain my afro. (Sandeen, 2022a)
          </p>

          <p>
            I would suggest every person try homemade recipes for their natural.
            Recipes that you can easily find on social media platforms such as
            Tik Tok, Instagram, and Twitter where beautiful black queens have
            come together to help one another with tips on how not to maintain
            and grow natural hair. The most important ingredient to healthy
            happy natural hair is WATER.
          </p>

          <p>
            It is imperative to have a wash day once a week if your natural hair
            is not in a protective style. See image below for a wash day
            routine.
          </p>

          <img src={washday} class="wash" />

          <h2>Hairstyles for natural hair: </h2>

          <p>
            Natural hair needs to be maintained and protected and we look to
            protective styles such as twists, braids, cornrows, and Bantu knots.
            See the images below placed respectively. (Sandeen, 2022a)
          </p>

          <img src={fro3} class="fro" />
          <img src={fro4} class="fro" />
          <img src={fro1} class="fro" />
          <img src={fro2} class="fro" />

          <p>References:</p>

          <p>
            Cosmetize. (2022). Afro hair types have a different kind of routine
            and a rather lengthy one! So, This guide will definitely help you
            understand which type of hair do you have. Cosmetize Blog.
            https://www.cosmetize.com/blog/2022/11/07/what-is-your-afro-hair-type-4a-4b-4c{" "}
          </p>

          <p>
            Sandeen, D. (2022a). What Is Natural Hair? A Definition and In-Depth
            Look. Byrdie.
            https://www.byrdie.com/what-is-natural-hair-definition-and-in-depth-look-400268#:~:text=Natural%20hair%2C%20by%20definition%2C%20hasn,no%20heat%20damage%20has%20occurred).
          </p>
        </main>
      </main>
    );
  }
}
