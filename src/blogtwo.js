import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./blogtwo.css";

class blogtwo extends Component {
  render() {
    return (
      <main className="blogone">
        <Link to="/blogone" class="prev">
          &laquo;{" "}
        </Link>
        <Link to="/blogthree" class="next">
          {" "}
          &raquo;
        </Link>
        <div className="bg2"></div>
        <main class="two">
          <header for="name" class="blogname2">
            Web Art ideas
          </header>
          <p>19 March 2023</p>
          <p>
            I struggled significantly last year with web APIs and JavaScript to
            the point where I hoped I would never have to see or deal with
            either of them again. But this year I really want to get better at
            working with both, primarily JavaScript. The one thing I find most
            fascinating about APIs is they allow you to draw from a large pool
            of information and especially allow for the creation of interactive
            works and interesting works.
          </p>

          <p>
            This week’s reading was a bit difficult for me to follow and how it
            relates to interactive media and net art. The reading tackled the
            topic of conventions and my understanding of conventions through the
            reading refers to a shared agreement to the way something should or
            is done. But context is what creates differences in conventions. The
            way I understand it is that there are conventions to writing a comic
            for example, but the context may be the genre is what makes a
            difference. I could be completely wrong so please let me know if I
            am.
          </p>

          <p>
            I have managed to grow to like net art this week especially after
            having a discussion in class and seeing previous students’ works. I
            managed to draw inspiration from their work last week I complained
            about the web art not being aesthetically pleasing which s the main
            thing that irritated me. I also don’t understand why when you google
            web art the most bizarre stuff pops up and why there aren’t more
            modern examples of web art.
          </p>

          <p>
            From looking at previous students’ work I figured that I can make
            something that is aesthetically pleasing. I particularly liked Iman
            Raffee and Michaels Parkins’ work, particularly because of the
            aesthetic appeal and interactivity of both. On Iman’s sight when you
            hovered over the links little waves appeared which I really liked.
            Everything about the site tied in together and was very unified
            nothing felt out of place and it’s minimalistic and very pleasing to
            the eye. I liked that you could interact with the artwork also.
          </p>

          <p>
            In Michaels’ work, I liked the sense of interactivity the site gives
            from the very start and the overall design and aesthetic of the
            site. For my site and web art, I want to create a collage because I
            want to center the site around black women’s hair which is something
            that is of interest to me and is an art form in itself. And explore
            creating collages of images or videos. And the other idea I had was
            to make the artwork basically a Pinterest kind of page where you
            type in the kind of hairstyle you want to see like braids and a
            whole bunch of images and videos will pop up and you can click on
            them to learn more about the type of hairstyle.
          </p>
        </main>
      </main>
    );
  }
}

export default blogtwo;
