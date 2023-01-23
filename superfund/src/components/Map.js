import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
const mapStyles = {
  width: "50%",
  height: "50%",
};
export class MapContainer extends Component {
  render() {
    return (
      <Map
        className="Map-Component"
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 48, lng: -77 }}
      />
    );
  }
}
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY,
})(MapContainer);
