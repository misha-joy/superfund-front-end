import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="nav-bar">
      <ul className={click ? "nav-menu active" : "nave-menu"}>
        <li className="nav-item">
          <Link
            to="What is  a Superfund"
            spy={true}
            smooth={true}
            offset={10}
            duration={500}
            onClick={closeMenu}
          >
            What is a Superfund?
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="Environmental Impact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
          >
            Environmental Impact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="EPA Database"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
          >
            EPA Database
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="Learn"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
          >
            Learn
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="Health Outcomes"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
          >
            Health Outcomes
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="Take Action"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
          >
            Take Action
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
