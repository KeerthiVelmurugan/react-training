import React, { useState } from 'react';

function SavingsCalculator() {
  const [goalAmount, setGoalAmount] = useState('');
  const [timeFrame, setTimeFrame] = useState('');
  const [monthlySaving, setMonthlySaving] = useState('');

  const calculateMonthlySaving = () => {
    const goal = parseFloat(goalAmount);
    const months = parseFloat(timeFrame);
    
    if (goal && months) {
      const monthlySavingValue = goal / months;
      setMonthlySaving(monthlySavingValue.toFixed(2));
    } else {
      setMonthlySaving('');
    }
  };

  const handleGoalAmountChange = (event) => {
    setGoalAmount(event.target.value);
  };

  const handleTimeFrameChange = (event) => {
    setTimeFrame(event.target.value);
  };

  return (
    <div className="savings-calculator">
      <h2>Savings Goal Calculator</h2>
      <div className="input-container">
        <label>Goal Amount ($):</label>
        <input type="number" value={goalAmount} onChange={handleGoalAmountChange} />
      </div>
      <div className="input-container">
        <label>Time Frame (months):</label>
        <input type="number" value={timeFrame} onChange={handleTimeFrameChange} />
      </div>
      <button onClick={calculateMonthlySaving}>Calculate Monthly Saving</button>
      {monthlySaving && <div className="result">You need to save ${monthlySaving} per month to reach your goal</div>}
    </div>
  );
}

export default SavingsCalculator;
