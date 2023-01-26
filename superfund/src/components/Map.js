import React, { Component, useState } from "react";
import locations from "../data/location.json";
import PropTypes from "prop-types";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import CustomMarker from "../assets/Blue.png";
import Markers from "./Markers.js";

const API_KEY = process.env.REACT_APP_API_KEY;

// const infoWindow = locations.map((item) => {
//   return new googlemaps.infoWindow({
//     content: item["SITE_NAME"],
//     ariaLable: "Hello",
//   });
// });

// const [map, setMap] = useState(null);

// const markerCluster = new MarkerClusterer({ map,  markers });

const mapStyles = {
  width: "75%",
  height: "75%",
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
        {Markers}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapContainer);
