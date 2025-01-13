// import React, { useState } from 'react';

// function TextParser() {
//   const [textInput, setTextInput] = useState('');
//   const [extractedUrls, setExtractedUrls] = useState([]);
//   const [extractedDates, setExtractedDates] = useState([]);
//   const [extractedMentions, setExtractedMentions] = useState([]);

//   const handleTextInputChange = (event) => {
//     const { value } = event.target;
//     setTextInput(value);

//     // Extract URLs
//     const urls = value.match(/(https?:\/\/[a-zA-z0-9]+)/g) || [];
//     setExtractedUrls(urls);

//     // Extract dates (YYYY-MM-DD format)
//     const dates = value.match(/\b\d{4}-\d{2}-\d{2}\b/g) || [];
//     setExtractedDates(dates);

//     // Extract mentions (Twitter usernames)
//     const mentions = value.match(/@([A-Za-z0-9_]+)/g) || [];
//     setExtractedMentions(mentions);
//   };

//   return (
//     <div>
//       <h2>Text Parser</h2>
//       <textarea
//         value={textInput}
//         onChange={handleTextInputChange}
//         placeholder="Enter text here..."
//         rows={6}
//         cols={50}
//       />
//       <div>
//         <h3>Extracted URLs:</h3>
//         <ul>
//           {extractedUrls.map((url, index) => (
//             <li key={index}>{url}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h3>Extracted Dates:</h3>
//         <ul>
//           {extractedDates.map((date, index) => (
//             <li key={index}>{date}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <h3>Extracted Mentions:</h3>
//         <ul>
//           {extractedMentions.map((mention, index) => (
//             <li key={index}>{mention}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default TextParser;


import React, { useState } from 'react';

function TextParser() {
  const [textInput, setTextInput] = useState('');
  const [extractedUrls, setExtractedUrls] = useState([]);
  const [extractedDates, setExtractedDates] = useState([]);
  const [extractedMentions, setExtractedMentions] = useState([]);

  const handleTextInputChange = (event) => {
    const { value } = event.target;
    setTextInput(value);

    // Extract URLs
    const urlPattern = /(https?:\/\/[a-zA-Z0-9]+\.[a-zA-Z]+\.[a-zA-Z]+)/g;
    const urls = [];
    let match;
    while ((match = urlPattern.exec(value)) !== null) {
      urls.push(match[0]);
    }
    setExtractedUrls(urls);

    // Extract dates (YYYY-MM-DD format)
    const datePattern = /\b\d{4}[-/.]\d{2}[-/.]\d{2}\b/g;
    const dates = [];
    while ((match = datePattern.exec(value)) !== null) {
      dates.push(match[0]);
    }
    setExtractedDates(dates);

    // Extract mentions (Twitter usernames)
    const mentionPattern = /@([A-Za-z0-9_]+)/g;
    const mentions = [];
    while ((match = mentionPattern.exec(value)) !== null) {
      mentions.push(match[0]);
    }
    setExtractedMentions(mentions);
  };

  return (
    <div>
      <h2>Text Parser</h2>
      <textarea
        value={textInput}
        onChange={handleTextInputChange}
        placeholder="Enter text here..."
        rows={6}
        cols={50}
      />
      <div>
        <h3>Extracted URLs:</h3>
        <ul>
          {extractedUrls.map((url, index) => (
            <li key={index}>{url}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Extracted Dates:</h3>
        <ul>
          {extractedDates.map((date, index) => (
            <li key={index}>{date}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Extracted Mentions:</h3>
        <ul>
          {extractedMentions.map((mention, index) => (
            <li key={index}>{mention}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TextParser;
