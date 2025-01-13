// // import React, { useState } from 'react';

// // const HighlightSearchTerm = () => {
// //   const [text, setText] = useState('This is a sample text for searching.');
// //   const [searchTerm, setSearchTerm] = useState('');

// //   const handleInputChange = (e) => {
// //     setSearchTerm(e.target.value);
// //   };

// //   const highlightOccurrences = () => {
// //     if (!searchTerm) {
// //       return text;
// //     }

// //     // Create a regular expression with the search term and 'gi' for global and case-insensitive matching
// //     const regex = new RegExp(searchTerm, 'gi');

// //     // Use replace to wrap matched occurrences with <span> for highlighting
// //     const highlightedText = text.replace(regex, (match) => `<span class="highlight">${match}</span>`);

// //     return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />;
// //   };

// //   return (
// //     <div>
// //       <label>
// //         Enter a search term:
// //         <input type="text" value={searchTerm} onChange={handleInputChange} />
// //       </label>
// //       <p>{highlightOccurrences()}</p>
// //     </div>
// //   );
// // };

// // export default HighlightSearchTerm;


// import React, { useState } from 'react';
// import './HighlightSearchTerm.css'; // Make sure to create and import your CSS file

// const HighlightSearchTerm = () => {
//   const [text, setText] = useState('This is a sample text for searching.');
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const highlightOccurrences = () => {
//     if (!searchTerm) {
//       return text;
//     }

//     // Create a regular expression with the search term and 'gi' for global and case-insensitive matching
//     const regex = new RegExp(searchTerm, 'gi');

//     // Use replace to wrap matched occurrences with <span> for highlighting
//     const highlightedText = text.replace(regex, (match) => `<span class="highlight">${match}</span>`);

//     return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />;
//   };

//   return (
//     <div>
//       <label>
//         Enter a search term:
//         <input type="text" value={searchTerm} onChange={handleInputChange} />
//       </label>
//       <p>{highlightOccurrences()}</p>
//     </div>
//   );
// };

// export default HighlightSearchTerm;

import React, { useState } from 'react';
import './HighlightSearchTerm.css'; // Import the CSS file

const HighlightSearchTerm = () => {
  const [text, setText] = useState('This is a sample text for searching.');
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const highlightOccurrences = (text, searchTerm) => {
    if (!searchTerm) {
      return text;
    }

    const parts = text.split(new RegExp(`(${searchTerm})`, 'gi'));
    
    return parts.map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className="highlight">{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div>
      <label>
        Enter a search term:
        <input type="text" value={searchTerm} onChange={handleInputChange} />
      </label>
      <p>{highlightOccurrences(text, searchTerm)}</p>
    </div>
  );
};

export default HighlightSearchTerm;

