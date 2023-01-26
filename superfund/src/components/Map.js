import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import React from 'react';
import locations from '../data/location.json';
import { useState } from 'react';
import CustomMarker from '../assets/Blue.png';

const Map = (props) => {
  const { isLoaded } = props;
  const [selectedMarker, setSelectedMarker] = useState('');
  const containerStyle = {
    width: '400px',
    height: '400px',
  };
  const center = {
    lat: 39.833333,
    lng: -98.583333,
  };

  const markers = locations;

  return (
    isLoaded && (
      <>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={3}>
          {markers.map((marker) => {
            return (
              <div key={marker['SITE_ID']}>
                <Marker
                  position={{
                    lat: marker['LATITUDE'],
                    lng: marker['LONGITUDE'],
                  }}
                  options={{ icon: CustomMarker }}
                  onClick={() => {
                    setSelectedMarker(marker);
                  }}
                />
              </div>
            );
          })}
          {selectedMarker && (
            <InfoWindow
              position={{
                lat: selectedMarker['LATITUDE'],
                lng: selectedMarker['LONGITUDE'],
              }}
            >
              <>
                <h1>{selectedMarker['SITE_NAME']}</h1>
                <button
                  onClick={() => {
                    setSelectedMarker('');
                  }}
                >
                  Close
                </button>
              </>
            </InfoWindow>
          )}
        </GoogleMap>
      </>
    )
  );
};

export default Map;
