import React from "react";
import "./Content.css";

const Content = (props) => {
  return (
    <div className="entry">
      <h2>{props.title}</h2>
      <p className="paragraph-display">{props.info}</p>
      <a href={props.linkURL}>{props.link}</a>
      <img className="sf-photos" src={props.image1} alt={props.imageAlt1} />
      <img className="sf-photos" src={props.image2} alt={props.imageAlt2} />
    </div>
  );
};

export default Content;
