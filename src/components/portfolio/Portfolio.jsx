import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";
import IMG8 from "../../assets/portfolio8.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>What I Developed</h5>
      <h2>Portfolios</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Web App - FitBod</h3>

          <div className="portfolio__item-cta">
            <div>
              <a href="https://github.com/AmanDhungel/fitness-app" className="btn">
                Github
              </a>
            </div>

            <div>
              <a href="https://amandhungel.github.io/fitness-app/" className="btn btn-primary" target="_blank">
                Live Demo
              </a>
            </div>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Website Devlopment - BMS Foods</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AmanDhungel/BMSfoods" className="btn">
              Github
            </a>
            <a href="https://amandhungel.github.io/BMSfoods/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Web Game - Guess My Number</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AmanDhungel/Guess-the-number" className="btn">
              Github
            </a>
            <a href="https://amandhungel.github.io/Guess-the-number/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Web App - Simple Weather App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AmanDhungel/simple-weather-app" className="btn">
              Github
            </a>
            <a href="https://amandhungel.github.io/simple-weather-app/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Web App - Youtube Clone</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AmanDhungel/youtube-clone" className="btn">
              Github
            </a>
            <a href="https://amandhungel.github.io/youtube-clone/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG8} alt="" />
          </div>
          <h3>Web Game - Tic-Tac-Toe</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AmanDhungel/Tic-Tac-Toe" className="btn">
              Github
            </a>
            <a href="https://amandhungel.github.io/Tic-Tac-Toe/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG7} alt="" />
          </div>
          <h3>Made Using JS - 10 JS Projects</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/AmanDhungel/js-projects" className="btn">
              Github
            </a>
            <a href="https://amandhungel.github.io/js-projects/" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Website - Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn">
              Github
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
