// App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrencyConverterForm from './CurrencyConvertor';


const MainForm = () => {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    // Fetch currency rates from API
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get('https://api.exchangerate-api.com/v4/latest/USD');
        const rates = Object.keys(response.data.rates);
        setCurrencies(rates);
      } catch (error) {
        console.error('Error fetching currency rates:', error);
      }
    };

    fetchCurrencies();
  }, []);

  return (
    <div>
      <h1>Currency Converter</h1>
      <CurrencyConverterForm currencies={currencies} />
    </div>
  );
};

export default MainForm;
