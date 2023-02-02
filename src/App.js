import React from "react";
// import Map1 from './components/Map1';
import Map from "./components/Map";
import Chart from "./components/Chart";
import BarGraph from "./components/BarGraph";
import { useJsApiLoader } from "@react-google-maps/api";
import { mapOptions } from "./MapConfiguration";
// import locations from "./data/location.json";
import "./App.css";
import HeaderImage from "./assets/HeaderImage.png";
import FooterImage from "./assets/FooterImage.png";

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
      <header className="Header">
        <img
          className="images"
          src={HeaderImage}
          alt="painting of a chemical plant on the shores of a lake"
        ></img>
        <h1>Environmental Justice is Social Justice</h1>
      </header>
      <nav className="Nav-Bar">
        <ul>
          <li>Health Outcomes</li>
          <li>Environmental Impact</li>
          <li>Take Action</li>
          <li>Learn</li>
          <li>EPA Database</li>
          <li>About</li>
        </ul>
      </nav>
      <h2>Superfund Finder</h2>
      <div className="Map-Container">
        <Map isLoaded={isLoaded} className="Map-Container" />
        <div className="Map-Info">
          <h3>What is a Superfund Site</h3>
          <p>
            EXAMPLE: For millions of people across the United States, the
            location of their homes jeopardizes their health. One in six
            Americans lives within three miles of a toxic waste site—often
            unknowingly. Scattered across the country, some sites are visible,
            but others, such as abandoned industrial facilities, can be
            inconspicuous.
          </p>
        </div>
      </div>

      <div className="Other-Content">
        <h2>Health Outcomes</h2>
        <Chart />
        <BarGraph />
        <h2>Environmental Impact</h2>
        <p>
          EXAMPLE: What are the risks of living near toxic waste sites? Research
          shows adverse health effects most likely occur within a 1.8 mile
          boundary around a Superfund site. Approximately 21 million people live
          within a mile (PDF) of a Superfund site, potentially exposing them all
          to harmful chemicals and toxins such as lead, arsenic, and mercury.
          The release of these chemicals can endanger water supply, air quality,
          and ground conditions, leading to detrimental community health
          consequences.
        </p>
        <h2>Take Action</h2>
        <p>
          EXAMPLE: To address exposure from toxic waste sites and prevent
          contamination from disaster-related events, all levels of government
          have a role. The federal government has the authority and funding to
          clean up Superfund sites under the Comprehensive Environmental
          Response, Compensation, and Liability Act. Therefore, a good starting
          point is for the EPA and HUD to work jointly to address existing
          exposure for communities living near toxic waste sites and ensure
          projects submitted for Superfund cleanup are assessed equitably,
          accounting for health disparities, income, and community partnership
          capacity. State and local policymakers can also take proactive steps
          to reduce and eliminate future exposure, especially given the
          increased threat of natural disasters. Zoning reforms can help
          localities limit future development near Superfund sites to allow for
          greater distances between waste sites and community areas. Local
          officials can also consider requiring the use of safer technologies
          when disposing of chemicals, requiring and enforcing environmental and
          health assessments of communities near toxic waste sites, enforcing
          environmental and safety regulations (PDF), and focusing on attracting
          cleaner energy and industries to their communities and combating the
          pressure that residents still face to allow “dirty” industries to
          relocate their facilities to their communities.
        </p>
        <h2>Learn</h2>
        <p>Links to stuff about superfunds and such!!</p>
        <h2>EPA Database</h2>
        <p>links to the epa website and such!</p>
        <h2>About</h2>
        <p>about the project and reyna and misha! </p>
      </div>
      <footer>
        <img
          className="images"
          src={FooterImage}
          alt="grass growing on the shore of a lake"
        ></img>
      </footer>
    </div>
  );
}
export default App;
