import React, { Component } from "react";
import "./Theory.css";
import { Link } from "react-router-dom";
import blogone from "./blogone";

class Theory extends Component {
  render() {
    return (
      <main className="Theory">
        <div class="bg1"></div>
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

                    <Link to="/blogone" class="button">
                      Read
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
                    <a href="blogtwo.html" class="button">
                      Read
                    </a>
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
                    <a href="blogthree.html" class="button">
                      Read
                    </a>
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
                    <a href="blogfour.html" class="button">
                      Read
                    </a>
                  </header>
                </aside>
              </section>

              <section class="blogpost">
                <aside class="content">
                  <div class="image">
                    <img src="https://images.unsplash.com/photo-1531347334762-59780ece5c76?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=marissa-grootes-YwPNWDNZHkg-unsplash.jpg&w=640" />
                  </div>
                  <header class="desc">
                    <h3>Reflection</h3>
                    <p>
                      According to research internet art refers to art that is
                      made on and for the internet. So far, I hadn’t seen any
                      internet art that is...
                    </p>
                    <a href="blogfive.html" class="button">
                      Read
                    </a>
                  </header>
                </aside>
              </section>

              <section class="blogpost">
                <aside class="content">
                  <div class="image">
                    <img src="https://i.pinimg.com/564x/a6/fd/21/a6fd2129ba0626ffa083e962ebcb7ea5.jpg" />
                  </div>
                  <header class="desc">
                    <h3>Web art improved</h3>
                    <p>
                      For my Web art, I have settled on focusing on black
                      women’s hair as an art form because it can take on
                      different froms shapes...
                    </p>
                    <a href="blogthree.html" class="button">
                      Read
                    </a>
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
