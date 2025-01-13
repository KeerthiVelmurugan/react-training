// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function GeolocationFinder() {
// //   const [location, setLocation] = useState({ latitude: null, longitude: null, name: null });
// //   const [error, setError] = useState(null);

// //   const getLocation = () => {
// //     if (navigator.geolocation) {
// //       navigator.geolocation.getCurrentPosition(showPosition, showError);
// //     } else {
// //       setError('Geolocation is not supported by this browser.');
// //     }
// //   };

// //   const showPosition = async (position) => {
// //     // const latitude = position.coords.latitude;
// //     // const longitude = position.coords.longitude;
// //     const latitude=34.232334343
// //     const longitude = 23.234444
// //     const apiKey = '5fbf5a7dc9a7433dab5b5acb9550e7f8';
// //     setLocation({ ...location, latitude, longitude });

// //     try {
// //       const response = await axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`);
// //       const locationName = response.data.results[0].formatted;
// //       setLocation({ latitude, longitude, name: locationName });
// //     } catch (error) {
// //       setError('Unable to retrieve location name.');
// //     }
// //   };

// //   const showError = (error) => {
// //     switch(error.code) {
// //       case error.PERMISSION_DENIED:
// //         setError("User denied the request for Geolocation.");
// //         break;
// //       case error.POSITION_UNAVAILABLE:
// //         setError("Location information is unavailable.");
// //         break;
// //       case error.TIMEOUT:
// //         setError("The request to get user location timed out.");
// //         break;
// //       case error.UNKNOWN_ERROR:
// //         setError("An unknown error occurred.");
// //         break;
// //       default:
// //         setError("An error occurred.");
// //         break;
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>JavaScript Geolocation</h2>
// //       <p>Click the button to get your coordinates and location name.</p>
// //       <button onClick={getLocation}>Try It</button>
// //       <p id="demo">
// //         {error ? error : 
// //          location.latitude && location.longitude ? 
// //          `Latitude: ${location.latitude} \n Longitude: ${location.longitude} \n Location: ${location.name}` : 
// //          "Location not available"}
// //       </p>
// //     </div>
// //   );
// // }

// // export default GeolocationFinder;


// import React, { useState } from 'react';

// function GeolocationFinder() {
//   const [location, setLocation] = useState('');
//   const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
//   const [error, setError] = useState(null);

//   const getCoordinates = async () => {
//     if (!location) {
//       setError("Please enter a location.");
//       return;
//     }

//     try {
//       const response = await fetch(
//         `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
//       );
//       const data = await response.json();

//       if (data.length > 0) {
//         const { lat, lon } = data[0];
//         setCoordinates({ latitude: lat, longitude: lon });
//         setError(null);
//       } else {
//         setError("Location not found.");
//       }
//     } catch (err) {
//       setError("An error occurred while fetching the coordinates.");
//     }
//   };

//   return (
//     <div>
//       <h2>Get Latitude and Longitude of a Location</h2>
//       <input 
//         type="text" 
//         value={location} 
//         onChange={(e) => setLocation(e.target.value)} 
//         placeholder="Enter location"
//       />
//       <button onClick={getCoordinates}>Get Coordinates</button>

//       {error && <p style={{ color: 'red' }}> {error}</p>}

//       {coordinates.latitude && coordinates.longitude && (
//         <p>
//           Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}
//         </p>
//       )}
//     </div>
//   );
// }

// export default GeolocationFinder;


import React, { useState } from 'react';

function GeolocationFinder() {
  const [location, setLocation] = useState('');
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  // Replace 'YOUR_API_KEY' with your actual OpenWeather API key.
  const API_KEY = 'd23b1219ac17498c12ab1d36be5d5dba'; 

  const getCoordinates = async () => {
    if (!location) {
      setError("Please enter a location.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(location)}&limit=1&appid=${API_KEY}`
      );
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon } = data[0];
        setCoordinates({ latitude: lat, longitude: lon });
        setError(null);
      } else {
        setError("Location not found.");
      }
    } catch (err) {
      setError("An error occurred while fetching the coordinates.");
    }
  };

  return (
    <div>
      <h2>Get Latitude and Longitude of a Location</h2>
      <input 
        type="text" 
        value={location} 
        onChange={(e) => setLocation(e.target.value)} 
        placeholder="Enter location"
      />
      <button onClick={getCoordinates}>Get Coordinates</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {coordinates.latitude && coordinates.longitude && (
        <p>
          Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}
        </p>
      )}
    </div>
  );
}

export default GeolocationFinder;

