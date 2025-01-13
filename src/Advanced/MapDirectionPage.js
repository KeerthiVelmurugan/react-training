import React, { useState } from 'react';

const MapDirectionPage = () => {
  const [destination, setDestination] = useState('');
  const [currentLocation, setCurrentLocation] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Get user's current location
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocation(position.coords);
      // Generate Google Maps link with current location and destination
      const googleMapsLink = `https://www.google.com/maps/dir/?api=1&origin=${position.coords.latitude},${position.coords.longitude}&destination=${destination}`;
      // Open Google Maps link in a new tab
      window.open(googleMapsLink, '_blank');
    }, (error) => {
      console.error('Error getting current location:', error);
    });
  };

  return (
    <div>
      <h1>Get Directions</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Destination:
          <input
            type="text"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          />
        </label>
        <button type="submit">Get Directions</button>
      </form>
    </div>
  );
};

export default MapDirectionPage;
