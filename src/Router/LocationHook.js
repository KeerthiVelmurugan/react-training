import React from 'react';
import { useLocation } from 'react-router-dom';

const LocationHook = () => {
  const location = useLocation();
  const { user } = location.state || {}; // Safely access the state

  return (
    <div>
      <h1>Profile Page</h1>
      {user ? (
        <div>
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>No user data found!</p>
      )}
    </div>
  );
};

export default LocationHook;
