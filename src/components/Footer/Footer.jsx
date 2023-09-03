import React from "react";
import "./Footer.css";
import { Link } from "react-scroll";
import github from "../../assets/github.png";
import linkedIn from "../../assets/linkedin.png";
import logo from "../../assets/fitbit logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a
            href="https://github.com/shahanawazgit/fitbit"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="social-links" />
          </a>
          <a
            href="https://www.linkedin.com/in/shahanawaz-pathan"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedIn} alt="social-links" />
          </a>
        </div>
        <div className="logo-f">
          <Link to="home" spy={true} smooth={true}>
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
      </div>

      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
};

export default Footer;
