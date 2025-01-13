// import React, { useState } from 'react';

// function Geolocation() {
//   const [location, setLocation] = useState({ latitude: null, longitude: null });
//   const [error, setError] = useState(null);

//   const getLocation = () => {
//     if (navigator.geolocation) {
//         let pos={}
//        // console.log(navigator.geolocation.getCurrentPosition(pos))
//       navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//       setError('Geolocation is not supported by this browser.');
//     }
//   };

//   const showPosition = (position) => {
//     let place = position.
//     console.log(place)
//     setLocation({
//       latitude: position.coords.latitude,
//       longitude: position.coords.longitude
//     });
//   };

//   const showError = (error) => {
//     switch(error.code) {
//       case error.PERMISSION_DENIED:
//         setError("User denied the request for Geolocation.");
//         break;
//       case error.POSITION_UNAVAILABLE:
//         setError("Location information is unavailable.");
//         break;
//       case error.TIMEOUT:
//         setError("The request to get user location timed out.");
//         break;
//       case error.UNKNOWN_ERROR:
//         setError("An unknown error occurred.");
//         break;
//       default:
//         setError("An error occurred.");
//         break;
//     }
//   };

//   return (
//     <div>
//       <h2>JavaScript Geolocation</h2>
//       <p>Click the button to get your coordinates.</p>
//       <button onClick={getLocation}>Try It</button>
//       <p id="demo">
//         {error ? error : 
//          location.latitude && location.longitude ? 
//          `Latitude: ${location.latitude} \n Longitude: ${location.longitude}` : 
//          "Location not available"}
//       </p>
//     </div>
//   );
// }

// export default Geolocation;


import React, { useState } from 'react';

function Geolocation() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  };

  const showPosition = (position) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setError("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        setError("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        setError("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        setError("An unknown error occurred.");
        break;
      default:
        setError("An error occurred.");
        break;
    }
  };

  return (
    <div>
      <h2>JavaScript Geolocation</h2>
      <p>Click the button to get your coordinates.</p>
      <button onClick={getLocation}>Try It</button>
      <p>
        {error ? error : 
         location.latitude && location.longitude ? 
         `Latitude: ${location.latitude}, Longitude: ${location.longitude}` : 
         "Location not available"}
      </p>
    </div>
  );
}

export default Geolocation;
