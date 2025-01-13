import React, { useState } from 'react';

const TrafficLight = () => {
    const [currentColor, setCurrentColor] = useState('');

    const getNextColor = (color) => {
        switch(color) {
            case 'red':
                return 'green';
            case 'green':
                return 'yellow';
            case 'yellow':
                return 'red';
            default:
                return null;
        }
    };

    const handleColorChange = (event) => {
        const color = event.target.value.toLowerCase();
        const nextColor = getNextColor(color);
        if (nextColor) {
            setCurrentColor(nextColor);
        } else {
            alert('Please enter a valid color: red, yellow, or green.');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Traffic Light Simulator</h1>
            <input 
                type="text" 
                placeholder="Enter color (red, yellow, green)" 
                onBlur={handleColorChange} 
            />
            <div style={{ marginTop: '20px', fontSize: '24px' }}>
                Next Color: <span style={{ color: currentColor }}>{currentColor}</span>
            </div>
        </div>
    );
};

export default TrafficLight;
