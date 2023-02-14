import React from 'react';
import Map from './components/Map';
import Chart from './components/Chart';
import { useJsApiLoader } from '@react-google-maps/api';
import { mapOptions } from './MapConfiguration';
import './App.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import information from './data/information.js';
import CongresSearchBox from './components/CongressSearchBox';
import About from './components/About';

const libraries = ['places'];

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
          image1={informationTerm.image1}
          imageAlt1={informationTerm.imageAlt1}
          image2={informationTerm.image2}
          imageAlt2={informationTerm.imageAlt2}
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
  if (loadError) return 'Error Loading Map';

  return (
    <div className="app">
      <header className="header">
        <NavBar />
      </header>
      <div id="map-content" className="dictionary">
        {' '}
        {createContent(information[0])}
      </div>
      <div className="map-container">
        <div className="map-display">
          <Map className="map" isLoaded={isLoaded} />{' '}
        </div>
      </div>
      <div id="map-content" className="dictionary">
        {' '}
        {createContent(information[1])}
      </div>
      <div className="bar-graph-container">
        <Chart />
      </div>
      <div>
        <dl className="dictionary">
          {information.slice(2, 8).map(createContent)}
        </dl>
        {/* <CongresSearchBox /> */}
      </div>
      <footer>
        <About className="about" />
      </footer>
    </div>
  );
}
export default App;
