"use client"
import React, { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultCenter = {
  lat: -1.970579, // Default latitude (e.g., Rwanda)
  lng: 30.104429, // Default longitude
};

const LocationPicker = (onLocationSelect:any) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Kigali&key=AIzaSyAURkSUyBAwJVEZRNMBZED28BkI7ThcbbE",
    libraries: ['places']
  });

  const [markerPosition, setMarkerPosition] = useState(defaultCenter);

  const handleMapClick = (event:any) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkerPosition({ lat, lng });
    if (onLocationSelect) onLocationSelect({ lat, lng });
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div>
      <h1>Select Location</h1>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={markerPosition}
        zoom={10}
        onClick={handleMapClick}
      >
        <Marker position={markerPosition} />
      </GoogleMap>
      <p>
        Selected Location: Latitude {markerPosition.lat}, Longitude {markerPosition.lng}
      </p>
    </div>
  );
};

export default LocationPicker;
