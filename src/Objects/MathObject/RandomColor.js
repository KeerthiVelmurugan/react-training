import { div } from '@tensorflow/tfjs';
import React, { useState } from 'react';

function RandomColorGenerator() {
  const [randomColor, setRandomColor] = useState('');
  const [bgrandomColor, setBgRandomColor] = useState('');

  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256); // Random value between 0 and 255
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const color = `rgb(${red}, ${green}, ${blue})`;
    const bgcolor = `rgb(${green}, ${red}, ${blue})`
    setRandomColor(color)
    setBgRandomColor(bgcolor)
  };

  let a=150
  let b=100
  let c=110

  return (
    <div style={{ backgroundColor: `rgb(${a},${b},${c})`, minHeight: '100vh', display: 'flex',justifyContent:'center',alignItems:'center',color:bgrandomColor}}>
      <h2>Random Color Generator</h2>
      <button onClick={generateRandomColor}>Generate Random Color</button>
      <div style={{ width: '100px', height: '100px', backgroundColor:bgrandomColor  }}></div>
      <p>{randomColor}
      {bgrandomColor}</p>
    </div>
    
  );
}

export default RandomColorGenerator;
