import React, { useState } from 'react';

function OccurrencesCounter() {
    const [array, setArray] = useState('');
    const [occurrences, setOccurrences] = useState({});

    const handleInputChange = (event) => {
        setArray(event.target.value);
    };

    const countOccurrences = () => {
        const arr = array.split(',').map(item => item.trim());
        const occurrencesObj = {};

        arr.forEach(element => {
            if (element in occurrencesObj) {
                occurrencesObj[element]++;
            } else {
                occurrencesObj[element] = 1;
            }
        });

        setOccurrences(occurrencesObj);
    };

    return (
        <div>
            <h2>Occurrences Counter</h2>
            <input
                type="text"
                placeholder="Enter an array (comma-separated)"
                value={array}
                onChange={handleInputChange}
            />
            <button onClick={countOccurrences}>Count</button>
            <div>
                <h3>Occurrences:</h3>
                <ul>
                    {Object.entries(occurrences).map(([key, value]) => (
                        <li key={key}>{key}: {value}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default OccurrencesCounter;
