import React from 'react';

const MapWithMarker = () => {
  const center = { lat: 51.5074, lng: -0.1278 }; // Example: London coordinates
  const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${center.lat},${center.lng}&zoom=10&size=400x400&markers=color:red%7C${center.lat},${center.lng}&key=YOUR_API_KEY`;

  return (
    <div>
      <img src={mapUrl} alt="Map with marker" />
    </div>
  );
};

export default MapWithMarker;
