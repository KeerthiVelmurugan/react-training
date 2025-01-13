import React, { useState } from 'react';
 // You can style your Tip Calculator using CSS

function TipCalculator() {
  const [billAmount, setBillAmount] = useState('');
  const [tipPercentage, setTipPercentage] = useState('');
  const [tipAmount, setTipAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const calculateTip = () => {
    const bill = parseFloat(billAmount);
    const tipPercent = parseFloat(tipPercentage) / 100;

    if (bill && tipPercent) {
      const tipAmountValue = bill * tipPercent;
      const totalAmountValue = bill + tipAmountValue;

      setTipAmount(tipAmountValue.toFixed(2));
      setTotalAmount(totalAmountValue.toFixed(2));
    } else {
      setTipAmount('');
      setTotalAmount('');
    }
  };

  const handleBillAmountChange = (event) => {
    setBillAmount(event.target.value);
  };

  const handleTipPercentageChange = (event) => {
    setTipPercentage(event.target.value);
  };

  return (
    <div className="tip-calculator">
      <h2>Tip Calculator</h2>
      <div className="input-container">
        <label>Bill Amount ($):</label>
        <input type="number" value={billAmount} onChange={handleBillAmountChange} />
      </div>
      <div className="input-container">
        <label>Tip Percentage (%):</label>
        <input type="number" value={tipPercentage} onChange={handleTipPercentageChange} />
      </div>
      <button onClick={calculateTip}>Calculate Tip</button>
      {tipAmount && totalAmount && (
        <div className="result">
          <p>Tip Amount: ${tipAmount}</p>
          <p>Total Amount (including tip): ${totalAmount}</p>
        </div>
      )}
    </div>
  );
}

export default TipCalculator;
