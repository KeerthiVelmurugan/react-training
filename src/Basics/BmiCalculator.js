import React, { useState } from 'react';

const BmiCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);

  const calculateBmi = () => {
    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);

    if (isNaN(parsedWeight) || isNaN(parsedHeight) || parsedHeight <= 0 || parsedWeight <= 0) {
      // Handle invalid input
      alert('Please enter valid weight and height.');
      return;
    }

    const bmiValue = parsedWeight / (parsedHeight * parsedHeight);
    setBmi(bmiValue.toFixed(2));
  };

  const getBmiCategory = () => {
    if (bmi === null) {
      return '';
    } else if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi < 24.9) {
      return 'Normal weight';
    } else if (bmi < 29.9) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };

  return (
    <div>
      <h2>BMI Calculator</h2>
      <label>
        Enter your weight (kg): 
        <input
          type="text"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <label>
        Enter your height (m): 
        <input
          type="text"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <button onClick={calculateBmi}>Calculate BMI</button>

      {bmi !== null && (
        <div>
          <h3>Result:</h3>
          <p>Your BMI is {bmi}</p>
          <p>You are categorized as: {getBmiCategory()}</p>
        </div>
      )}
    </div>
  );
};

export default BmiCalculator;
