import React, { Component } from "react";
import "./blogfour.css";

class blogfour extends Component {
  render() {
    return (
      <main className="blogfour">
        <a href="blogthree" class="prev">
          &laquo;{" "}
        </a>
        <a href="blogfive" class="next">
          {" "}
          &raquo;
        </a>
        <div className="bg"></div>
        <div className="one">
          <header for="name" class="name">
            My UI and UX
          </header>
          <p>20 April 2023</p>
          <p>
            To start of let us give a brief definition of UI and UX. UI refers
            to the aesthetic design of an application’s interface, and UX refers
            to designing the application to make it usable and accessible to
            users. My site is based on aesthetics the entire site in itslef acts
            as part of my art piece. My site is dedicated to the appreciation of
            the art form that is black womens hair.
          </p>

          <p>1) Consistency:</p>
          <p>
            The site makes use of simple navigation tools the menu bar remains
            at the top right hand corner of every page. That way the user does
            not getconfused. There is a consistent use of colour among all the
            page creating harmony. (Maze, 2022)
          </p>

          <p>2) Readability and Legibility:</p>
          <p>
            My site does not contain much writing but I have made sure that all
            writing is written in a font that is readable and legible. Headings
            are written in larger font to distinguish from the main writing.
            Writing is provided with padding when it is inside a container so
            that it does not look squashed. There is enough space in between
            sentences and text is aligned to the left. I primarily made use of
            the open sans and fonts which make it easy to distingusih each words
            characters from each other. (The Basic Principles of User Interface
            Design, 2022)
          </p>

          <p>3)Shortcuts:</p>
          <p>
            I have provided “next” and “previous” buttons on my blog post pages
            and other respective pages in the design tab, so the user can click
            on them to take them to the next blog post or the previous one. As
            well as a “back” button that will automatically take them back to
            the blog or design page. (Maze, 2022)
          </p>

          <p>4) Feedback:</p>
          <p>
            It is important for the user to know where they are and what is
            going on. The site gives the user back useful feedback, in various
            ways when hovering over the menu the pointer will change to let the
            user know that it is clickable and the page, they are currently on
            will be highlighted in the menu to show where the user is.
            Similarly, for the cards on the design page when the user hovers
            over the cards the pointer will change to give the user feedback
            that they can click on it. On the Blog page there is a button
            provided for the user to click so they can read the desired post.
            For the art page the user can hover over the images and it will blur
            and the cursor will chaneg to indicate that the image is clickable.
            (Maze, 2022)
          </p>

          <p>5) Responsive</p>
          <p>
            Certain parts of the site are responsive such as some text and the
            menu but other aspects such as images i struggle to have them be
            resposnive. (Maze, 2022)
          </p>

          <p>6) Clarity</p>
          <p>
            My site provides the user with very clear indications of where they
            are and what to do through the menu and various other buttons made
            available. (The Basic Principles of User Interface Design, 2022)
          </p>

          <p>7) Visual Hiearchy</p>
          <p>
            This aims at telling the user how to take in information or what is
            important as soon as they open a page. This can be done in various
            ways such as through size, colour, and dominance. On my site, the
            way I represent visual hierarchy is through size and colour. On my
            pages, the title of the page is represented in much larger text and
            is bold and usually at the top of the page this tells the user
            immediately what to expect from the start of the page. On my blog
            posts, the title of the blog post is in larger font at the top of
            the page and in a different font style indicating that it is
            important but also differs from the main text but rather gives an
            indication about what the main text is about. These differences help
            the user to identify which information is important. The large text
            or bold text immediately prompts the user to read that first and if
            that is the aim then that is how you draw attention to important
            information. (Maze, 2022)
          </p>

          <p>Refrences</p>
          <p>
            The Basic Principles of User Interface Design. (2022, March 30).
            Studio by UXPin. Retrieved September 1, 2022, from
            https://www.uxpin.com/studio/blog/ui-design-principles/ .
          </p>

          <p>
            Maze. (2022, July 25). The 6 Key Principles of UI Design. Retrieved
            September 2, 2022, from
            https://maze.co/collections/ux-ui-design/ui-design-principles/ .
          </p>
        </div>
        <footer class="footer">
          <p>
            <strong>Email:</strong> miss.nozii.sithole@gmail.com
          </p>
          <p>
            <strong>Tel:</strong> (065) 744 9243
          </p>
        </footer>
      </main>
    );
  }
}

export default blogfour;
