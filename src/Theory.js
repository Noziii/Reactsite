import React, { Component } from "react";
import "./Theory.css";
import { Link } from "react-router-dom";
import blogone from "./blogone";

class Theory extends Component {
  render() {
    return (
      <main className="Theory">
        <div class="bg-theory"></div>
        <section class="card">
          <div class="container">
            <main class="column">
              <section class="blogpost">
                <aside class="content">
                  <div class="image">
                    <img src="https://images.unsplash.com/photo-1509281373149-e957c6296406?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=ajeet-mestry-UBhpOIHnazM-unsplash.jpg&w=640" />
                  </div>
                  <header class="desc">
                    <h3>Web Art ?</h3>
                    <p>
                      I found it hard to stay concentrated throughout the entire
                      video especially because I was failing to understand most
                      of ...
                    </p>
                    <Link to="/blogone">
                      <button class="button">Read</button>
                    </Link>
                  </header>
                </aside>
              </section>

              <section class="blogpost">
                <aside class="content">
                  <div class="image">
                    <img src="https://images.unsplash.com/photo-1549144277-47d96d572dc4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=jon-tyson-3oXiciGXJ5c-unsplash.jpg&w=640" />
                  </div>
                  <header class="desc">
                    <h3>Web Art ideas</h3>
                    <p>
                      I struggled significantly last year with web APIs and
                      JavaScript to the point where I hoped I would never have
                      to see or deal with either...
                    </p>
                    <Link to="/blogtwo">
                      <button class="button">Read</button>
                    </Link>
                  </header>
                </aside>
              </section>

              <section class="blogpost">
                <aside class="content">
                  <div class="image">
                    <img src="https://i.pinimg.com/564x/8e/d5/8b/8ed58b45cef4252e2364db74cc28530e.jpg" />
                  </div>
                  <header class="desc">
                    <h3>My web art</h3>
                    <p>
                      For my Web art, I have settled on focusing on black
                      women’s hair as an art form because it can take on
                      different froms shapes...
                    </p>
                    <Link to="/blogthree">
                      <button class="button"> Read</button>
                    </Link>
                  </header>
                </aside>
              </section>

              <section class="blogpost">
                <aside class="content">
                  <div class="image">
                    <img src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=faizur-rehman-dJpupM4LiS4-unsplash.jpg&w=640" />
                  </div>
                  <header class="desc">
                    <h3>My UI and UX</h3>
                    <p>
                      To start of let us give a brief definition of UI and UX.
                      UI refers to the aesthetic design of an application’s
                      interface, and UX refers...
                    </p>
                    <Link to="/blogfour">
                      <button class="button">Read</button>
                    </Link>
                  </header>
                </aside>
              </section>

              <section class="blogpost">
                <aside class="content">
                  <div class="image">
                    <img src="https://images.unsplash.com/photo-1531347334762-59780ece5c76?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=marissa-grootes-YwPNWDNZHkg-unsplash.jpg&w=640" />
                  </div>
                  <header class="desc">
                    <h3>Final Reflection</h3>
                    <p>
                      According to research internet art refers to art that is
                      made on and for the internet. So far, I hadn’t seen any
                      internet art that is...
                    </p>
                    <Link to="/blogfive">
                      <button class="button">Read</button>
                    </Link>
                  </header>
                </aside>
              </section>

              <section class="blogpost">
                <aside class="content">
                  <div class="image">
                    <img src="https://i.pinimg.com/564x/5c/e9/df/5ce9dffacea013c8f057ed37922db5ad.jpg" />
                  </div>
                  <header class="desc">
                    <h3>Essay</h3>
                    <p>
                      In this essay, I will be analysing the AI-generated song
                      titled Heart on My Sleeve(2023) by artists Drake and The
                      Weeknd as a web/internet...
                    </p>
                    <Link to="/blogsix">
                      <button class="button"> Read</button>
                    </Link>
                  </header>
                </aside>
              </section>
            </main>
          </div>
        </section>
      </main>
    );
  }
}

export default Theory;
