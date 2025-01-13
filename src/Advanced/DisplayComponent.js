// DisplayComponent.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function DisplayComponent() {
  const location = useLocation();
  const { name, email, message } = location.state || {};

  let data = location.state
  console.log(location.state)

  console.log(name,email); // Log formData for debugging

  return (
    <div>
      <h2>Display Form Data</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong> {message}</p>
      {data.name}
    </div>
  );
}

export default DisplayComponent;
