import {
  GoogleMap,
  Marker as GoogleMarker,
  MarkerClusterer,
  StandaloneSearchBox,
  // LoadScript,
  // ScriptLoaded,
} from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import locations from '../data/location.json';
import CustomMarker from '../assets/Blue.png';
import InfoWindow from './InfoWindow';
import mapStyles from '../mapStyles';
// import SearchBox from './SearchBox';
// import Markers from "./Markers";
// import usePlacesAutoComplete, {
// import { getGeocode, getLatLng } from 'use-places-autocomplete';
import './Map.css';

const kBaseUrl = 'http://127.0.0.1:5000/superfunds';

const getAllSuperfundsApi = () => {
  return axios
    .get(`${kBaseUrl}`)
    .then((response) => {
      // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error.data);
    });
};

const Map = (props) => {
  const { isLoaded } = props;
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [markersData, setMarkersData] = useState([]);
  const [mapCenter, setMapCenter] = useState({
    lat: 39.833333,
    lng: -98.583333,
  });
  const containerStyle = {
    width: '75vh',
    height: '50vw',
  };
  const center = mapCenter;
  // const center = { lat: 39.833333, lng: -98.583333 };

  // const markers = getAllSuperfundsApi().then((data) => {
  //   // console.log(data[0]['LATITUDE']);
  //   // console.log(data);
  //   return data;
  // });

  const getAllSuperfunds = () => {
    return getAllSuperfundsApi()
      .then((superfunds) => {
        setMarkersData(superfunds);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getAllSuperfunds();
  }, []);

  // const onClick = (ref) => (this.standaloneSearchBox = ref);
  // const onPlacesChanged = () => console.log(this.searchBox.getPlaces());
  return (
    isLoaded && (
      <>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={3}
          options={{
            styles: mapStyles,
            // disableDefaultUI: true,
          }}
        >
          <MarkerClusterer>
            {(clusterer) => (
              <div>
                {markersData.map((marker) => {
                  return (
                    <div key={marker['SITE_ID']}>
                      <GoogleMarker
                        clusterer={clusterer}
                        position={{
                          lat: marker['LATITUDE'],
                          lng: marker['LONGITUDE'],
                        }}
                        options={{ icon: CustomMarker }}
                        onClick={() => {
                          setSelectedMarker(marker);
                          setMapCenter(center);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </MarkerClusterer>
          {selectedMarker && (
            <InfoWindow
              selectedMarker={selectedMarker}
              setSelectedMarker={setSelectedMarker}
            />
          )}
        </GoogleMap>
        <StandaloneSearchBox
        // onClick={onClick}
        // onPlacesChanged={onPlacesChanged}
        >
          <input
            className="search-box"
            type="text"
            placeholder="Search by Address"
          />
        </StandaloneSearchBox>
        <button className="search-button">Search</button>
      </>
    )
  );
};

export default Map;
