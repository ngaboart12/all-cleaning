// app/map/page.tsx
'use client'

import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { calculateDistance } from './component/calculateDistance';

interface Location {
  lat: number;
  lng: number;
  address: string;
}

export default function MapPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [secondLocation, setSecondLocation] = useState<Location | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  
  const [mapCenter, setMapCenter] = useState({
    lat: 40.7128,
    lng: -74.0060
  });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAURkSUyBAwJVEZRNMBZED28BkI7ThcbbE" || '',
    libraries: ['places']
  });

  const handleMapClick = useCallback((e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return;
    
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    
    // If no location is selected, set first location
    // If first location exists, set second location
    const newLocation = {
      lat,
      lng,
      address: 'Loading...'
    };

    if (!selectedLocation) {
      setSelectedLocation(newLocation);
    } else {
      setSecondLocation(newLocation);
      // Calculate distance
      const distanceInKm = calculateDistance(
        selectedLocation.lat,
        selectedLocation.lng,
        lat,
        lng
      );
      setDistance(distanceInKm);
    }
    
    // Get address using Geocoding
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      { location: { lat, lng } },
      (results, status) => {
        if (status === 'OK' && results?.[0]) {
          const locationWithAddress = {
            lat,
            lng,
            address: results[0].formatted_address
          };
          if (!selectedLocation) {
            setSelectedLocation(locationWithAddress);
          } else {
            setSecondLocation(locationWithAddress);
          }
        }
      }
    );
  }, [selectedLocation]);

  const clearLocations = () => {
    setSelectedLocation(null);
    setSecondLocation(null);
    setDistance(null);
  };

  return (
    <main className="min-h-screen p-4 bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="mb-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-900">Select Two Locations to Calculate Distance</h1>
            <button 
              onClick={clearLocations}
              className="px-3 py-1.5 bg-red-500 text-white rounded-md text-sm hover:bg-red-600"
            >
              Clear Locations
            </button>
          </div>

          <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
            {isLoaded ? (
              <GoogleMap
                mapContainerClassName="w-full h-[400px]"
                center={mapCenter}
                zoom={12}
                onClick={handleMapClick}
                options={{
                  streetViewControl: false,
                  mapTypeControl: false,
                  fullscreenControl: true,
                  zoomControl: true,
                }}
              >
                {selectedLocation && (
                  <Marker
                    position={{ 
                      lat: selectedLocation.lat, 
                      lng: selectedLocation.lng 
                    }}
                    label="A"
                  />
                )}
                {secondLocation && (
                  <Marker
                    position={{ 
                      lat: secondLocation.lat, 
                      lng: secondLocation.lng 
                    }}
                    label="B"
                  />
                )}
              </GoogleMap>
            ) : (
              <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
              </div>
            )}
          </div>

          {selectedLocation && (
            <div className="border border-gray-200 rounded-lg p-3 bg-gray-50 text-sm">
              <h2 className="font-semibold mb-2 text-gray-900">Location Details</h2>
              <div className="space-y-1 text-gray-600">
                <div>
                  <p className="font-medium">Location A:</p>
                  <p>Latitude: {selectedLocation.lat.toFixed(6)}</p>
                  <p>Longitude: {selectedLocation.lng.toFixed(6)}</p>
                  <p>Address: {selectedLocation.address}</p>
                </div>
                
                {secondLocation && (
                  <>
                    <div className="mt-2">
                      <p className="font-medium">Location B:</p>
                      <p>Latitude: {secondLocation.lat.toFixed(6)}</p>
                      <p>Longitude: {secondLocation.lng.toFixed(6)}</p>
                      <p>Address: {secondLocation.address}</p>
                    </div>
                    
                    {distance !== null && (
                      <div className="mt-4 p-2 bg-blue-50 rounded-md">
                        <p className="font-medium text-blue-900">Distance:</p>
                        <p className="text-blue-800">{distance.toFixed(2)} kilometers</p>
                        <p className="text-blue-800">({(distance * 0.621371).toFixed(2)} miles)</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}