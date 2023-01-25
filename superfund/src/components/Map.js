import React, { Component, useState } from "react";
import locations from "../data/location.json";
import PropTypes from "prop-types";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const API_KEY = process.env.REACT_APP_API_KEY;

const markers = locations.map((item) => {
  return (
    <Marker
      key={item.name}
      position={{
        lat: item["LATITUDE"],
        lng: item["LONGITUDE"],
      }}
    />
  );
});

const mapStyles = {
  width: "100%",
  height: "100%",
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
        {/* for (let i = 0; i < locations.length; i ++) {
          const latLng = {locations[i]["LATITUDE"],
          locations[i]["LONGITUDE"]};

          new google.maps.Marker({
            position: latLng,
            map: map 
          })
        }; */}
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: API_KEY,
})(MapContainer);
