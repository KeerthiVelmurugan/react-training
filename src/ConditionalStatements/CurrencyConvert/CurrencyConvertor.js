// CurrencyConverterForm.js
import React, { useState } from 'react';
import axios from 'axios';

const CurrencyConverterForm = ({ currencies }) => {
  const [amount, setAmount] = useState('');
  const [sourceCurrency, setSourceCurrency] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${sourceCurrency}`
      );
      const exchangeRates = response.data.rates;
      const sourceRate = exchangeRates[sourceCurrency];
      const targetRate = exchangeRates[targetCurrency];
      const result = (parseFloat(amount) / sourceRate) * targetRate;
      setConvertedAmount(result.toFixed(2));
      setError('');
    } catch (error) {
      setConvertedAmount(null);
      setError('Error converting currency. Please try again.');
      console.error('Error converting currency:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />
        <select
          value={sourceCurrency}
          onChange={(e) => setSourceCurrency(e.target.value)}
          required
        >
          <option value="">Select source currency</option>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <select
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
          required
        >
          <option value="">Select target currency</option>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <button type="submit">Convert</button>
      </form>
      {convertedAmount && (
        <p>
          Converted amount: {convertedAmount} {targetCurrency}
        </p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default CurrencyConverterForm;
