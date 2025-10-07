import React, { useState } from "react";

const conversionFactors = {
  weight: { kg: 1, lbs: 2.20462 },
  temperature: { C: 1, F: 1.8 },
  distance: { km: 1, miles: 0.621371 },
};

const UnitConverter = () => {
  const [category, setCategory] = useState("weight");
  const [fromUnit, setFromUnit] = useState("kg");
  const [toUnit, setToUnit] = useState("lbs");
  const [inputValue, setInputValue] = useState("");
  const [convertedValue, setConvertedValue] = useState("");

  const unitOptions = {
    weight: ["kg", "lbs"],
    temperature: ["C", "F"],
    distance: ["km", "miles"],
  };

  const convert = (value, from, to) => {
    if (!value) return "";

    if (category === "temperature") {
      return from === "C"
        ? ((value * 9) / 5 + 32).toFixed(2) // °C → °F
        : (((value - 32) * 5) / 9).toFixed(2); // °F → °C
    }

    // General conversion formula
    return ((value / conversionFactors[category][from]) * conversionFactors[category][to]).toFixed(2);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setConvertedValue(convert(parseFloat(value), fromUnit, toUnit));
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Unit Converter</h2>

      {/* Select category */}
      <select
        value={category}
        onChange={(e) => {
          const newCategory = e.target.value;
          setCategory(newCategory);
          setFromUnit(unitOptions[newCategory][0]);
          setToUnit(unitOptions[newCategory][1]);
          setInputValue("");
          setConvertedValue("");
        }}
      >
        <option value="weight">Weight</option>
        <option value="temperature">Temperature</option>
        <option value="distance">Distance</option>
      </select>

      <br /><br />

      {/* Select "From" unit */}
      <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
        {unitOptions[category].map((unit) => (
          <option key={unit} value={unit}>{unit}</option>
        ))}
      </select>

      <input type="number" placeholder="Enter value" value={inputValue} onChange={handleInputChange} />

      <span style={{ margin: "0 10px" }}>⇄</span>

      {/* Select "To" unit */}
      <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
        {unitOptions[category].map((unit) => (
          <option key={unit} value={unit}>{unit}</option>
        ))}
      </select>

      <input type="text" value={convertedValue} readOnly placeholder="Converted value" />
    </div>
  );
};

export default UnitConverter;
