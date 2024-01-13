import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/*  UI/UX */}
        <article className="service">
          <div className="services__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Seamless Desgin</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Smooth and responsive pages</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Usability tests</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Research</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visually appealing and consistent design</p>
            </li>
          </ul>
        </article>

        {/* Web Development*/}
        <article className="service">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-End Development (based on ui/ux)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Back-End Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full-Stack Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Version Control (Can colaborate)</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Testing</p>
            </li>
          </ul>
        </article>

        {/* Content Creation*/}
        <article className="service">
          <div className="services__head">
            <h3>Video Editing</h3>
          </div>

          <ul className="services__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Clip Assembly</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Transitions</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Color Grading</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Motion Graphics</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Pacing and Timing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
