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

const libraries = ["places"];

function createContent(informationTerm) {
  return (
    <div className="Content">
      <div id={informationTerm.id} className={informationTerm.title}>
        <Content
          key={informationTerm.id}
          title={informationTerm.title}
          info={informationTerm.info}
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
    <div className="App">
      <header className="Header">
        {/* <img
          className="images"
          src={HeaderImage}
          alt="painting of a chemical plant on the shores of a lake"
        ></img> */}
        {/* <h1>Environmental Justice is Social Justice</h1> */}
      </header>
      <NavBar />
      <h2>Superfund Finder</h2>
      <div className="Map-Container">
        <Map isLoaded={isLoaded} className="Map-Container" />
      </div>
      <div className="Pie-Container">
        <Chart />
      </div>
      <div>
        <dl className="dictionary">{information.map(createContent)}</dl>
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
