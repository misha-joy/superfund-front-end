import React from "react";
import Map from "./components/Map";
import Chart from "./components/Chart";
// import BarGraph from "./components/BarGraph";
import { useJsApiLoader } from "@react-google-maps/api";
import { mapOptions } from "./MapConfiguration";
import "./App.css";
import NavBar from "./components/NavBar";
// import FooterImage from "./assets/FooterImage.png";
import Content from "./components/Content";
import information from "./data/information.js";
import LEGraph from "./assets/SuperfundLEGraph.png";

const libraries = ["places"];

function createContent(informationTerm) {
  return (
    <div className="content">
      <div id={informationTerm.id} className={informationTerm.title}>
        <Content
          key={informationTerm.id}
          title={informationTerm.title}
          info={informationTerm.info}
          linkURL={informationTerm.linkURL}
          link={informationTerm.link}
          image={informationTerm.image}
          imageAlt={informationTerm.imageAlt}
        />
      </div>
    </div>
  );
}
function App() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: mapOptions.googleMapsApiKey,
    googleMapsApiKey: mapOptions.googleMapsApiKey,
    libraries,
  });
  if (loadError) return "Error Loading Map";

  return (
    <div className="app">
      <header className="header">
        {/* <img
          className="images"
          src={HeaderImage}
          alt="painting of a chemical plant on the shores of a lake"
        ></img> */}
        {/* <h1>Environmental Justice is Social Justice</h1> */}
      </header>
      <NavBar />
      <div className="map-container">
        <div className="map-display">
          <Map isLoaded={isLoaded} />{" "}
        </div>{" "}
        <div className="instructions-container">
          {" "}
          {information.slice(0, 2).map(createContent)}
        </div>
      </div>
      <div className="info-graphics">
        <div className="pie-container">
          <Chart />
        </div>
        <div className="le-graph-container">
          <h2>
            Effect of Superfund Sites Characteristics on Life Expectancy (LE).
          </h2>
          From:{" "}
          <a href="https://www.nature.com/articles/s41467-021-22249-2">
            The presence of Superfund sites as a derterminant of life expectancy
            in the United States
          </a>
          <img
            className="le-graph"
            src={LEGraph}
            alt="graph showing reduction in life expectancy due to living in proximity of superfund sites. Research suggests living near toxic waste sites reduces lifespans by an average of 1.2 years. "
          />
          <p></p>
        </div>
      </div>
      <div>
        <dl className="dictionary">
          {information.slice(2, 8).map(createContent)}
        </dl>
      </div>
      <footer>
        {" "}
        <p className="credits">
          {" "}
          Created by{" "}
          <a href="https://www.linkedin.com/in/reyna-diaz/"> Reyna</a> &
          <a href="https://www.linkedin.com/in/misha-craddock/"> Misha </a>,
          part of{" "}
          <a href="https://adadevelopersacademy.org/">Ada Developers Academy</a>{" "}
          Cohort 18
        </p>
        {/* <img
          className="images"
          src={FooterImage}
          alt="painting of grass growing on the shore of a lake"
        ></img> */}
      </footer>
    </div>
  );
}
export default App;
