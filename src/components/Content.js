import React from "react";
import "./Content.css";

const Content = (props) => {
  return (
    <div className="entry">
      <h2>{props.title}</h2>
      <p className="paragraph-display">{props.info}</p>
      <a href={props.linkURL}>{props.link}</a>
      <img src={props.image} alt={props.imageAlt} />
    </div>
  );
};

export default Content;
