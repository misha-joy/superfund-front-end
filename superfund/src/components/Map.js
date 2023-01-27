import {
  GoogleMap,
  Marker as GoogleMarker,
  MarkerClusterer,
} from "@react-google-maps/api";
import React from "react";
import locations from "../data/location.json";
import { useState } from "react";
import CustomMarker from "../assets/Blue.png";
import InfoWindow from "./InfoWindow";
// import { MarkerClusterer } from "@googlemaps/markerclusterer";

const Map = (props) => {
  const { isLoaded } = props;
  const [selectedMarker, setSelectedMarker] = useState(null);
  const containerStyle = {
    width: "75vh",
    height: "50vw",
  };
  const center = {
    lat: 39.833333,
    lng: -98.583333,
  };

  const markers = locations;
  // const markerCluster = new MarkerClusterer({ markers, Map });

  return (
    isLoaded && (
      <>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={5}>
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
          {/* {markerCluster} */}
          {selectedMarker && (
            <InfoWindow
              selectedMarker={selectedMarker}
              setSelectedMarker={setSelectedMarker}
            />
          )}
        </GoogleMap>
      </>
    )
  );
};

export default Map;
