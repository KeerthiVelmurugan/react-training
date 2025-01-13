import React, { useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-backend-webgl';

function PretrainedModelDemo() {
  const [model, setModel] = useState(null);
  const [prediction, setPrediction] = useState('');

  useEffect(() => {
    // Load the pre-trained model
    async function loadModel() {
      const model = await tf.loadLayersModel('path/to/your/model.json');
      setModel(model);
    }
    loadModel();

    // Clean up function
    return () => {
      if (model) {
        model.dispose();
      }
    };
  }, []);

  const handlePredict = async () => {
    // Make predictions using the loaded model
    const input = tf.tensor2d([[1, 2], [3, 4]]);
    const output = model.predict(input);
    const result = output.arraySync(); // Convert TensorFlow.js tensor to JavaScript array
    setPrediction(result);
  };

  return (
    <div>
      <button onClick={handlePredict}>Predict</button>
      {prediction && (
        <div>
          <h2>Prediction:</h2>
          <pre>{JSON.stringify(prediction, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default PretrainedModelDemo;
