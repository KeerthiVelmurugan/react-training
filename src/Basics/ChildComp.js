// ChildComponent.js
import React, { useState } from 'react';

function ChildComponent({ onData }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        // Call the callback function and pass data to the parent component
        onData(value);
    };

    return (
        <div>child
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Type something..."
            />
        </div>
    );
}


export default ChildComponent