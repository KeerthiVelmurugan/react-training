import React, { useState } from 'react';
 // You can style your Loan Calculator using CSS

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');

  const calculateMonthlyPayment = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanTerm);
    
    if (principal && rate && term) {
      const monthlyPaymentValue = (principal * rate) / (1 - Math.pow(1 + rate, -term));
      setMonthlyPayment(monthlyPaymentValue.toFixed(2));
    } else {
      setMonthlyPayment('');
    }
  };

  const handleLoanAmountChange = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleInterestRateChange = (event) => {
    setInterestRate(event.target.value);
  };

  const handleLoanTermChange = (event) => {
    setLoanTerm(event.target.value);
  };

  return (
    <div className="loan-calculator">
      <h2>Loan Repayment Calculator</h2>
      <div className="input-container">
        <label>Loan Amount ($):</label>
        <input type="number" value={loanAmount} onChange={handleLoanAmountChange} />
      </div>
      <div className="input-container">
        <label>Interest Rate (% per annum):</label>
        <input type="number" value={interestRate} onChange={handleInterestRateChange} />
      </div>
      <div className="input-container">
        <label>Loan Term (months):</label>
        <input type="number" value={loanTerm} onChange={handleLoanTermChange} />
      </div>
      <button onClick={calculateMonthlyPayment}>Calculate Monthly Payment</button>
      {monthlyPayment && <div className="result">Your monthly payment is: ${monthlyPayment}</div>}
    </div>
  );
}

export default LoanCalculator;
