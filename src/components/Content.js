import React from 'react';
import './Content.css';

const Content = (props) => {
  return (
    <div className="entry">
      <h2>{props.title}</h2>
      <p className="paragraph-display">{props.info}</p>
      <a className="links" href={props.linkURL}>
        {props.link}
      </a>
      {props.image1 && (
        <img className="sf-photos" src={props.image1} alt={props.imageAlt1} />
      )}
      {props.image2 && (
        <img className="sf-photos" src={props.image2} alt={props.imageAlt2} />
      )}
    </div>
  );
};

export default Content;
