// import React, { useEffect, useState } from "react";
// import information from "../data/information.js";
// import "./NavBar.css";

// const getTitles = (informationTerm) => {
//   return <li>{informationTerm.title}</li>;
// };

// const title = information.map(getTitles);

// const getIds = (informationTerm) => {
//   return informationTerm.id;
// };

// const NavItem = ({ itemName, active }) => {
//   const [anchorTarget, setAnchorTarget] = useState(null);
//   useEffect(() => {
//     // setAnchorTarget(document.getElementById("id"));
//     setAnchorTarget(information.map(getIds));
//   }, []);
//   const handleClick = (event) => {
//     event.preventDefault();
//     anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
//   };
//   return (
//     <nav className="Nav-Bar">
//       <a
//         href={information.map(getTitles)}
//         onClick={handleClick}
//         className={active}
//       >
//         {information.map(getTitles)}
//       </a>
//       {/* <li onClick={handleClick} className={active}>
//         {information.map(getTitles)}
//       </li> */}
//       <br />{" "}
//     </nav>
//   );
// };

// export default NavItem;
