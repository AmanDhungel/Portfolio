import React from "react";
import "./header.css";
import CTA from "./CTA";
import MyPic from "../../assets/my-pic.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Aman Dhungel</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={MyPic} alt="me" />
        </div>

       
      </div>
    </header>
  );
};

export default Header;
