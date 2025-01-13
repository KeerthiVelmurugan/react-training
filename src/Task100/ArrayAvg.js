import React, { useState } from 'react';

function AverageCalculator() {
    const [numbers, setNumbers] = useState('');
    const [average, setAverage] = useState(null);

    const handleChange = (event) => {
        setNumbers(event.target.value);
    };

    const handleClick = () => {
        console.log(numbers)
        const nums = numbers.split(',').map(num => parseInt(num.trim()));
        console.log(nums)

        if (nums.some(isNaN)) {
            alert('Please enter valid numbers separated by commas.');
            return;
        }

        const sum = nums.reduce((acc, num) => acc + num, 0);
        const avg = sum / nums.length;
        setAverage(avg);
    };

    return (
        <div>
            <h2>Array Average Calculator</h2>
            <input type="text" value={numbers} onChange={handleChange} placeholder="Enter numbers separated by commas" />
            <button onClick={handleClick}>Calculate</button>
            {average !== null && (
                <p>The average of the numbers is: {average}</p>
            )}
        </div>
    );
}

export default AverageCalculator;
