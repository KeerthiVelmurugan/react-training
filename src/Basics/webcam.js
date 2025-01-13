import React, { useState } from "react";
import Webcam from "react-webcam";

const FileUploadWithCamera = () => {
  const [file, setFile] = useState(null); // Store file or image
  const [capturing, setCapturing] = useState(false); // Toggle camera view
  const [image, setImage] = useState(null); // Captured image

  const webcamRef = React.useRef(null);

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setImage(null); // Clear the captured image if a new file is uploaded
  };

  // Start capturing from webcam
  const startCapture = () => {
    setCapturing(true);
  };

  // Capture image from webcam
  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    setFile(null); // Clear the uploaded file if an image is captured
    setCapturing(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    } else if (image) {
      formData.append("file", image);
    //  localStorage.setItem("image",image)
    }

    // Replace with your API endpoint
    fetch("YOUR_API_ENDPOINT", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Upload successful:", data);
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  function storeImage(){

  }

  return (
    <div>
      <h2>Upload File or Take a Picture</h2>
      <form onSubmit={handleSubmit}>
        {/* File Input */}
        <div>
          <label>
            Upload File:
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </label>
        </div>

        {/* Camera Capture */}
        {!capturing ? (
          <button type="button" onClick={startCapture}>
            Use Camera
          </button>
        ) : (
          <div>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={300}
            />
            <button type="button" onClick={captureImage}>
              Capture Image
            </button>
          </div>
        )}

        {/* Display Preview */}
        {image && (
          <div>
            <h4>Captured Image:</h4>
            <img src={image} alt="Captured" width={200} />
          </div>
        )}
        {file && (
          <div>
            <h4>Uploaded File:</h4>
            <p>{file.name}</p>
          </div>
        )}

        {/* Submit Button */}
        <button type="submit">Upload</button>
      </form>
      
      
    </div>
  );
};

export default FileUploadWithCamera;