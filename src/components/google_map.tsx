import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export const GoogleMapComponent = () => {
    // Coordonnées pour le centre de la carte
    const center = { lat: -4.245348, lng: 15.281874};
    // Coordonnées pour le marqueur
    const position = { lat: -4.245348, lng: 15.281874};
    function handleLoad() {}
    function hanldePlacesChanged() {}

  return (
    <LoadScript googleMapsApiKey="AIzaSyBNnWyBiWfcMChttyeyg5OyeTPdeUWgcAc" libraries={["places"]}>
      <GoogleMap
        id="map"
        mapContainerStyle={{ width: '100%', height: '300px' }}
        zoom={18}
        center={center}
      >
        <Marker position={position} title="Mon Marqueur" />
      </GoogleMap>
    </LoadScript>
  );
};