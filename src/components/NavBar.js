import React, { useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";
import information from "../data/information.js";

const createNavItem = (informationTerm) => {
  return (
    <li className="nav-item">
      <Link
        to={informationTerm.title}
        spy={true}
        smooth={true}
        offset={10}
        duration={500}
        // onClick={closeMenu}
      >
        {informationTerm.title}
      </Link>
    </li>
  );
};

const NavBar = () => {
  const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  // const closeMenu = () => setClick(false);

  return (
    <nav className="nav-bar">
      <ul className={click ? "nav-menu-active" : "nav-menu"}>
        {information.slice(2).map(createNavItem)}
      </ul>
    </nav>
  );
};
export default NavBar;
