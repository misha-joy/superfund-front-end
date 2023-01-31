import {
  GoogleMap,
  Marker as GoogleMarker,
  MarkerClusterer,
  StandaloneSearchBox,
  // LoadScript,
  // ScriptLoaded,
} from "@react-google-maps/api";
import React, { useState } from "react";
import locations from "../data/location.json";
import CustomMarker from "../assets/Blue.png";
import InfoWindow from "./InfoWindow";
import mapStyles from "../mapStyles";
import SearchBox from "./SearchBox";
// import Markers from "./Markers";
// import usePlacesAutoComplete, {
import { getGeocode, getLatLng } from "use-places-autocomplete";
import "./Map.css";

const Map = (props) => {
  const { isLoaded } = props;
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [mapCenter, setMapCenter] = useState({
    lat: 39.833333,
    lng: -98.583333,
  });
  const containerStyle = {
    width: "75vh",
    height: "50vw",
  };
  const center = mapCenter;

  const markers = locations;
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
                {markers.map((marker) => {
                  return (
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
