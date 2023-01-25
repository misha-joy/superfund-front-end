import React, { Component, useState } from "react";
import locations from "../data/location.json";
import PropTypes from "prop-types";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import CustomMarker from "../assets/warning-icon.jpg";

const API_KEY = process.env.REACT_APP_API_KEY;

const markers = locations.map((item) => {
  return (
    <Marker
      key={item["SITE_NAME"]}
      position={{
        lat: item["LATITUDE"],
        lng: item["LONGITUDE"],
      }}
      options={{
        icon: { CustomMarker },
      }}
    />
  );
});

const mapStyles = {
  width: "45%",
  height: "45%",
};
export class MapContainer extends Component {
  render() {
    return (
      <Map
        className="Map-Component"
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 38, lng: -78 }}
      >
        {markers}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapContainer);
