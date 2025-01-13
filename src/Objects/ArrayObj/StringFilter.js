// import React, { useState } from 'react';

// const StringFilter = () => {
//   // State to hold user input and the processed result
//   const [input, setInput] = useState('');
//   const [strings, setStrings] = useState([]);
//   const [result, setResult] = useState([]);

//   // Handle input changes
//   const handleInputChange = (event) => {
//     setInput(event.target.value);
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent page refresh on form submit

//     // Split the input string into an array of strings
//     const stringArray = input.split(',').map(str => str.trim());

//     // Process the array: filter out strings containing 'a' and convert to uppercase
//     const filteredAndTransformedStrings = stringArray
//       .filter(str => !str.includes('a')) // Filter out strings containing 'a'
//       .map(str => str.toUpperCase());    // Convert remaining strings to uppercase

//     // Update the state with the processed result
//     setStrings(stringArray);
//     setResult(filteredAndTransformedStrings);
//   };

//   return (
//     <div>
//       <h1>Filter and Transform Strings</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Enter strings (comma-separated):
//           <input
//             type="text"
//             value={input}
//             onChange={handleInputChange}
//             placeholder="e.g. apple, banana, cherry"
//           />
//         </label>
//         <button type="submit">Process</button>
//       </form>
      
//       {result.length > 0 && (
//         <div>
//           <h2>Processed Strings</h2>
//           <ul>
//             {result.map((str, index) => (
//               <li key={index}>{str}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default StringFilter;


import React, { useState } from 'react';

const StringFilter = () => {
  // State to hold user input, filter character, and the processed result
  const [input, setInput] = useState('');
  const [filterChar, setFilterChar] = useState('');
  const [strings, setStrings] = useState([]);
  const [result, setResult] = useState([]);

  // Handle input changes
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // Handle filter character changes
  const handleFilterCharChange = (event) => {
    setFilterChar(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh on form submit

    // Split the input string into an array of strings
    const stringArray = input.split(',').map(str => str.trim());

    // Process the array: filter out strings containing the filter character and convert to uppercase
    const filteredAndTransformedStrings = stringArray
      .filter(str => !str.includes(filterChar)) // Filter out strings containing the filter character
      .map(str => str.toUpperCase());    // Convert remaining strings to uppercase

    // Update the state with the processed result
    setStrings(stringArray);
    setResult(filteredAndTransformedStrings);
  };

  return (
    <div>
      <h1>Filter and Transform Strings</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter strings (comma-separated):
          <input
            type="text"
            value={input}
            onChange={handleInputChange}
            placeholder="e.g. apple, banana, cherry"
          />
        </label>
        <br />
        <label>
          Enter character to filter by:
          <input
            type="text"
            value={filterChar}
            onChange={handleFilterCharChange}
            placeholder="e.g. a"
          />
        </label>
        <br />
        <button type="submit">Process</button>
      </form>
      
      {result.length > 0 && (
        <div>
          <h2>Processed Strings</h2>
          <ul>
            {result.map((str, index) => (
              <li key={index}>{str}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StringFilter;
