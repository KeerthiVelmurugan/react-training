// import React, { useState } from 'react';

// const ErrorHandling = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const fetchData = async () => {
//     setIsLoading(true);

//     try {
//       const response = await fetch('http://catodotest.elevadosoftwares.com/Category/GetAllCategories');
      
//       if (!response.ok) {
//         throw new Error('Failed to fetch data');
//       }

//       const result = await response.json();
//       setData(result);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h2>MyComponent</h2>
      
//       {isLoading && <p>Loading...</p>}

//       {error ? (
//         <p>Error: {error}</p>
//       ) : (
//         data && <p>Data: {JSON.stringify(data)}</p>
//       )}

//       <button onClick={fetchData} disabled={isLoading}>
//         {isLoading ? 'Fetching...' : 'Fetch Data'}
//       </button>
//     </div>
//   );
// };

// export default ErrorHandling;


import React, { useState } from 'react';
import axios from 'axios';

const ErrorHandling = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const postData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post('http://example.com/api/endpoint', {
        // Your request payload here
      });
      
      setData(response.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(`Error: ${error.response.status} - ${error.response.data.message}`);
      } else if (error.request) {
        // The request was made but no response was received
        setError('Error: No response received from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        setError(`Error: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>MyComponent</h2>
      
      {isLoading && <p>Loading...</p>}

      {error ? (
        <p>{error}</p>
      ) : (
        data && <p>Data: {JSON.stringify(data)}</p>
      )}

      <button onClick={postData} disabled={isLoading}>
        {isLoading ? 'Posting...' : 'Post Data'}
      </button>
    </div>
  );
};

export default ErrorHandling;

