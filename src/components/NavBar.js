import React, { useEffect, useState } from "react";
import information from "../data/information.js";
import "./NavBar.css";
const getTitles = (informationTerm) => {
  return informationTerm.title;
};

const getIds = (informationTerm) => {
  return informationTerm.id;
};

const NavBar = () => {
  const [anchorTarget, setAnchorTarget] = useState(null);
  useEffect(() => {
    // setAnchorTarget(document.getElementById("id"));
    setAnchorTarget(information.map(getIds));
  }, []);
  const scrollTo = (event) => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <nav className="Nav-Bar">
      <ul>
        <li onClick={scrollTo}>{information.map(getTitles)}</li>
        <br />{" "}
      </ul>
    </nav>
  );
};

export default NavBar;
