import React from "react";
import Map from "./components/Map";
// import locations from "./data/location.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        {" "}
        <ul className="Nav-Bar">
          <li>health outcomes</li>
          <li>environmental impact</li>
          <li>take action</li>
          <li>learn</li>
          <li>epa database</li>
          <li>about</li>
        </ul>
      </nav>
      <h1>Site Title</h1>
      <div className="Map-Container">
        <Map id="Map" />
      </div>
    </div>
  );
}
// test
export default App;
