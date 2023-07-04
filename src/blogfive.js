import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./blogfive.css";

export default class extends Component {
  render() {
    return (
      <main className="blogfive">
        {" "}
        <Link to="/blogfour" class="prev">
          &laquo;{" "}
        </Link>
        <Link to="/blogsix" class="next">
          {" "}
          &raquo;
        </Link>
        <div className="bg5"></div>
        <main class="five">
          <header for="name" class="name5">
            Reflection
          </header>
          <p>24 April 2023</p>
          <p>
            According to research internet art refers to art that is made on and
            for the internet. So far, I hadn’t seen any internet art that is
            appealing to me. (Tate, n.d.) To me, art refers to something that is
            appealing to the eye whether it is interactive or not. I was under
            the impression that my artwork had to look like the works I have
            seen such as Exhausting a Crowd by Kyle McDonald which is an amazing
            interactive piece that runs in time.
          </p>

          <p>
            I chose to take art for what it is something pleasing to look at or
            an aspect that I think is art. According to research, the term art
            includes diverse media such as painting, sculptures, printmaking,
            drawing, photography, and installation. (The Editors of
            Encyclopaedia Britannica, 2023) Which is why I decided to create a
            collage. Which incorporates different aspects of art the first being
            the abstract collage I have created through the images I have put
            together. The images themselves serve as artwork works that is
            photography. And lastly, something that I consider to be an art form
            which is black women’s hair.
          </p>

          <p>
            The way in which black women’s hair can transform is an art form, it
            can take any shape, colour, and form that is desired. My portrait
            collage is made of various images displaying different states a
            black women’s hair can take, and different hairstyles. And when the
            user clicks on the images, they can access information about that
            specific hairstyle how to do it, how to take care of it, how long it
            lasts, how long it takes to do it, and products to use to take care
            of it.{" "}
          </p>

          <p>Refrences</p>
          <p>
            The Editors of Encyclopaedia Britannica. (2023, March 3). Art |
            Definition, Examples, Types, Subjects, & Facts. Retrieved from
            https://www.britannica.com/art/visual-arts
          </p>
          <p>
            Tate. (n.d.). Internet Art | Tate. Retrieved from
            https://www.tate.org.uk/art/art-terms/i/internet-art#:~:text=Internet%20art%20is%20art%20that,browser%20art%20and%20software%20art
          </p>
        </main>
      </main>
    );
  }
}
