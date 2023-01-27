import React from "react";
// import Map1 from './components/Map1';
import Map from "./components/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import { mapOptions } from "./components/MapConfiguration";
// import locations from "./data/location.json";
import "./App.css";

function App() {
  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapsApiKey,
    googleMapsApiKey: mapOptions.googleMapsApiKey,
  });
  return (
    <div className="App">
      <nav>
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
        <Map isLoaded={isLoaded} />
      </div>
    </div>
  );
}
export default App;
