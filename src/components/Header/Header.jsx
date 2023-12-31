import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/fitbit logo.png";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 650 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <Link to="home" spy={true} smooth={true}>
        <img src={logo} alt="logo" className="logo" />
      </Link>

      {menuOpened === false && mobile === true ? (
        <div
          onClick={() => setMenuOpened(true)}
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          <img
            src={bars}
            alt="bars"
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
