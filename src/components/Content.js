import React from "react";

const Content = (props) => {
  return (
    <div className="entry">
      <h2>{props.title}</h2>
      <p>{props.info}</p>
    </div>
  );
};

export default Content;
