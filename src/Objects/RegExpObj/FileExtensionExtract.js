// import React, { useState } from 'react';

// const FileExtensionExtractor = () => {
//   const [filename, setFilename] = useState('');
//   const [extension, setExtension] = useState('');

//   const getFileExtension = (filename) => {
//     const regex = /\.([0-9a-zA-Z]+)$/;
//     const match = filename.match(regex);
//     console.log(match)
//     return match ? match[1] : 'No extension';
//   };

//   const handleInputChange = (e) => {
//     const newFilename = e.target.value;
//     setFilename(newFilename);
//     setExtension(getFileExtension(newFilename));
//   };

//   return (
//     <div>
//       <h2>File Extension Extractor</h2>
//       <label>
//         Enter filename:
//         <input
//           type="text"
//           value={filename}
//           onChange={handleInputChange}
//           placeholder="Enter a filename with extension"
//         />
//       </label>
//       <p>
//         File Extension: <strong>{extension}</strong>
//       </p>
//     </div>
//   );
// };

// export default FileExtensionExtractor;



import React, { useState } from 'react';

const FileExtensionExtractor = () => {
  const [filename, setFilename] = useState('');
  const [extension, setExtension] = useState('');

  const getFileExtension = (filename) => {
    const regex = /\.([0-9a-zA-Z]+)$/;
    const match = filename.match(regex);
    return match ? match[1] : 'No extension';
  };

  const handleInputChange = (e) => {
    setFilename(e.target.value);
  };

  const handleButtonClick = () => {
    setExtension(getFileExtension(filename));
  };

  return (
    <div>
      <h2>File Extension Extractor</h2>
      <label>
        Enter filename:
        <input
          type="text"
          value={filename}
          onChange={handleInputChange}
          placeholder="Enter a filename with extension"
        />
      </label>
      <button onClick={handleButtonClick}>Get Extension</button>
      <p>
        File Extension: <strong>{extension}</strong>
      </p>
    </div>
  );
};

export default FileExtensionExtractor;
