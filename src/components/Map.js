import {
  GoogleMap,
  Marker as GoogleMarker,
  MarkerClusterer,
  StandaloneSearchBox,
  // LoadScript,
  // ScriptLoaded,
} from "@react-google-maps/api";
import React, { useState, useEffect } from "react";
import axios from "axios";
// import locations from '../data/location.json';
import CustomMarker from "../assets/Blue.png";
import InfoWindow from "./InfoWindow";
// import mapStyles from "../mapStyles";
// import SearchBox from "./SearchBox";
// import Markers from "./Markers";
// import usePlacesAutoComplete, {
// import { getGeocode, getLatLng } from 'use-places-autocomplete';
import "./Map.css";

const kBaseUrl = "https://superfund-back-end.herokuapp.com/superfunds";

const getAllSuperfundsApi = () => {
  return axios
    .get(`${kBaseUrl}`)
    .then((response) => {
      // const slice = response.data.slice(0, 10);
      // console.log(response.data);
      // return slice;
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
  const [zoom, setZoom] = useState(3);
  const containerStyle = {
    width: "2800px",
    height: "800px",
  };
  const center = mapCenter;
  const onLoad = (ref) => (window.searchBox = ref);

  const onPlacesChanged = () => {
    const [searchResult] = window.searchBox.getPlaces();
    setMapCenter({
      lat: searchResult.geometry.location.lat(),
      lng: searchResult.geometry.location.lng(),
    });
    setZoom(10);
  };
  const getAllSuperfunds = async () => {
    try {
      const superfunds = await getAllSuperfundsApi();
      setMarkersData(superfunds);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllSuperfunds();
  }, []);

  return (
    isLoaded && (
      <>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          options={
            {
              // styles: mapStyles,
              // disableDefaultUI: true,
            }
          }
        >
          <MarkerClusterer>
            {(clusterer) => (
              <div>
                {markersData.map((marker) => {
                  return (
                    isLoaded && (
                      <div key={marker["SITE_ID"]}>
                        <GoogleMarker
                          clusterer={clusterer}
                          position={{
                            lat: marker["LATITUDE"],
                            lng: marker["LONGITUDE"],
                          }}
                          options={{ icon: CustomMarker }}
                          onClick={() => {
                            setSelectedMarker(marker);
                            setMapCenter(center);
                          }}
                        />
                      </div>
                    )
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
          className="search-box"
          onLoad={onLoad}
          onPlacesChanged={onPlacesChanged}
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
