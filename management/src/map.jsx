import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    // Fetching current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Setting latitude and longitude
        setPosition({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error fetching location:", error);
        alert("Unable to retrieve your location. Please check your permissions.");
      }
    );
  }, []);

  return (
    <div>
      {position ? (
        <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>You current location</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
}

export default Map;
