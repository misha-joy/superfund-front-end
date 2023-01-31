import {
  GoogleMap,
  Marker as GoogleMarker,
  MarkerClusterer,
  // StandaloneSearchBox,
  // LoadScript,
} from "@react-google-maps/api";
import React, { useState } from "react";
import locations from "../data/location.json";
import CustomMarker from "../assets/Blue.png";

const Markers = (props) => {
  const { selectedMarker, setSelectedMarker } = props;
  return (
    <MarkerClusterer>
      {(clusterer) => (
        <div>
          {locations.map((marker) => {
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
  );
};
