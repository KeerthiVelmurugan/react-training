import React, { useState } from 'react';

const TitleCaseConverter = () => {
  const [inputString, setInputString] = useState('');
  const [titleCaseString, setTitleCaseString] = useState('');

  const convertToTitleCase = (str) => {
    return str
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleInputChange = (event) => {
    setInputString(event.target.value);
  };

  const handleConvertClick = () => {
    setTitleCaseString(convertToTitleCase(inputString));
  };

  return (
    <div>
      <input
        type="text"
        value={inputString}
        onChange={handleInputChange}
        placeholder="Enter a string..."
      />
      <button onClick={handleConvertClick}>Convert to Title Case</button>
      {titleCaseString && (
        <p>Output: {titleCaseString}</p>
      )}
    </div>
  );
};


export default TitleCaseConverter;



// without using map and join method
// import React, { useState } from 'react';

// const TitleCaseConverter = () => {
//   const [inputString, setInputString] = useState('');
//   const [titleCaseString, setTitleCaseString] = useState('');

//   const convertToTitleCase = (str) => {
//     const words = str.split(' ');
//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
//     // Build the title case string without using join method
//     let result = '';
//     for (let i = 0; i < words.length; i++) {
//       result += (i > 0 ? ' ' : '') + words[i];
//     }
//     return result;
//   };

//   const handleInputChange = (event) => {
//     setInputString(event.target.value);
//   };

//   const handleConvertClick = () => {
//     setTitleCaseString(convertToTitleCase(inputString));
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputString}
//         onChange={handleInputChange}
//         placeholder="Enter a string..."
//       />
//       <button onClick={handleConvertClick}>Convert to Title Case</button>
//       {titleCaseString && (
//         <p>Output: {titleCaseString}</p>
//       )}
//     </div>
//   );
// };

// export default TitleCaseConverter;
