import React, { useState } from 'react';

function ImageUploader() {
  const [image, setImage] = useState(null);       // To store file
  const [preview, setPreview] = useState(null);   // To store preview URL

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);  // store image file
      setPreview(URL.createObjectURL(file)); // generate preview URL
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      
      {preview && (
        <div>
          <p>Image Preview:</p>
          <img src={preview} alt="Preview" width="200" />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;
