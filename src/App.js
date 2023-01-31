import React from "react";
// import Map1 from './components/Map1';
import Map from "./components/Map";
import { useJsApiLoader } from "@react-google-maps/api";
import { mapOptions } from "./MapConfiguration";
// import locations from "./data/location.json";
import "./App.css";

const libraries = ["places"];
function App() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: mapOptions.googleMapsApiKey,
    googleMapsApiKey: mapOptions.googleMapsApiKey,
    libraries,
  });

  if (loadError) return "Error Loading Map";

  return (
    <div className="App">
      <nav>
        <ul className="Nav-Bar">
          <li>Health Outcomes</li>
          <li>Environmental Impact</li>
          <li>Take Action</li>
          <li>Learn</li>
          <li>EPA Database</li>
          <li>About</li>
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
