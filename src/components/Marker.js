import React, { Component, useState } from "react";
import locations from "../data/location.json";
// import PropTypes from "prop-types";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
// import { MarkerClusterer } from "@googlemaps/markerclusterer";
import CustomMarker from "../assets/Blue.png";

const Markers = locations.map((item) => {
  return (
    <Marker
      key={item["SITE_ID"]}
      position={{
        lat: item["LATITUDE"],
        lng: item["LONGITUDE"],
      }}
      options={{
        icon: CustomMarker,
      }}
    />
  );
});

export default Markers;
