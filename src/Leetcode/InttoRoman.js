import React, { useState } from 'react';

function RomanNumeralConverter() {
  const [inputNum, setInputNum] = useState('');
  const [romanNum, setRomanNum] = useState('');

  const intToRoman = (num) => {
    const romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const romanValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    let result = '';
    
    for (let i = 0; i < romanSymbols.length; i++) {
        while (num >= romanValues[i]) {
            result += romanSymbols[i];
            num -= romanValues[i];
        }
    }
    
    return result;
  };

  const handleInputChange = (e) => {
    setInputNum(e.target.value);
  };

  const convertToRoman = () => {
    const num = parseInt(inputNum, 10);
    if (!isNaN(num) && num >= 1 && num <= 3999) {
      setRomanNum(intToRoman(num));
    } else {
      setRomanNum('Invalid input');
    }
  };

  return (
    <div>
      <h2>Roman Numeral Converter</h2>
      <input type="text" value={inputNum} onChange={handleInputChange} placeholder="Enter an integer" />
      <button onClick={convertToRoman}>Convert to Roman</button>
      <p>Roman Numeral: {romanNum}</p>
    </div>
  );
}

export default RomanNumeralConverter;
