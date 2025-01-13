import React, { useState } from 'react';
 // You can style your Compound Interest Calculator using CSS

function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [compoundingFrequency, setCompoundingFrequency] = useState('');
  const [timePeriod, setTimePeriod] = useState('');
  const [compoundInterest, setCompoundInterest] = useState('');

  const calculateCompoundInterest = () => {
    const P = parseFloat(principal);
    const r = parseFloat(interestRate) / 100;
    const n = parseFloat(compoundingFrequency);
    const t = parseFloat(timePeriod);

    if (P && r && n && t) {
      const compoundInterestValue = P * Math.pow((1 + r / n), n * t) - P;
      setCompoundInterest(compoundInterestValue.toFixed(2));
    } else {
      setCompoundInterest('');
    }
  };

  const handlePrincipalChange = (event) => {
    setPrincipal(event.target.value);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleCompoundingFrequencyChange = (event) => {
    setCompoundingFrequency(event.target.value);
  };

  const handleTimePeriodChange = (event) => {
    setTimePeriod(event.target.value);
  };

  return (
    <div className="compound-interest-calculator">
      <h2>Compound Interest Calculator</h2>
      <div className="input-container">
        <label>Principal Amount ($):</label>
        <input type="number" value={principal} onChange={handlePrincipalChange} />
      </div>
      <div className="input-container">
        <label>Annual Interest Rate (%):</label>
        <input type="number" value={interestRate} onChange={handleInterestRateChange} />
      </div>
      <div className="input-container">
        <label>Compounding Frequency (per year):</label>
        <input type="number" value={compoundingFrequency} onChange={handleCompoundingFrequencyChange} />
      </div>
      <div className="input-container">
        <label>Time Period (years):</label>
        <input type="number" value={timePeriod} onChange={handleTimePeriodChange} />
      </div>
      <button onClick={calculateCompoundInterest}>Calculate Compound Interest</button>
      {compoundInterest && <div className="result">Compound Interest: ${compoundInterest}</div>}
    </div>
  );
}

export default CompoundInterestCalculator;
