import React from "react";
import "./Content.css";

const Content = (props) => {
  return (
    <div className="entry">
      <h2>{props.title}</h2>
      <p className="paragraph-display">{props.info}</p>
    </div>
  );
};

export default Content;
