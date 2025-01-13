import React, { useState } from 'react';

function NumberObject() {
  const [number, setNumber] = useState(0);
  const [precision, setPrecision] = useState(2);
  const [fixed, setFixed] = useState(2);
  const [precisionResult, setPrecisionResult] = useState('');
  const [fixedResult, setFixedResult] = useState('');

  const handleNumberChange = (event) => {
    setNumber(Number(event.target.value));
  };

  const handlePrecisionChange = (event) => {
    setPrecision(Number(event.target.value));
  };

  const handleFixedChange = (event) => {
    setFixed(Number(event.target.value));
  };

  const calculatePrecision = () => {
    setPrecisionResult(number.toPrecision(precision));
  };

  const calculateFixed = () => {
    setFixedResult(number.toFixed(fixed));
  };

  return (
    <div>
      <h2>Number Operations</h2>
      <label>
        Enter a number:
        <input type="number" value={number} onChange={handleNumberChange} />
      </label>
      <br />
      <label>
        Precision:
        <input type="number" value={precision} onChange={handlePrecisionChange} />
      </label>
      <button onClick={calculatePrecision}>Calculate Precision</button>
      <p>Result (Precision): {precisionResult}</p>
      <br />
      <label>
        Fixed:
        <input type="number" value={fixed} onChange={handleFixedChange} />
      </label>
      <button onClick={calculateFixed}>Calculate Fixed</button>
      <p>Result (Fixed): {fixedResult}</p>
    </div>
  );
}

export default NumberObject;
