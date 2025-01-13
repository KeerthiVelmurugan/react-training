import React, { useState } from 'react';

function LeapYearChecker() {
    const [year, setYear] = useState('');
    const [isLeapYear, setIsLeapYear] = useState(null);

    const handleInputChange = (event) => {
        setYear(event.target.value);
    };

    const checkLeapYear = () => {
        const yearInt = parseInt(year);
        if (isNaN(yearInt)) {
            setIsLeapYear(false); // Invalid input, consider it as not a leap year
        } else {
            setIsLeapYear((yearInt % 4 === 0 && yearInt % 100 !== 0) || (yearInt % 400 === 0));
        }
    };

    return (
        <div>
            <h2>Leap Year Checker</h2>
            <input
                type="text"
                placeholder="Enter a year"
                value={year}
                onChange={handleInputChange}
            />
            <button onClick={checkLeapYear}>Check</button>
            {isLeapYear !== null && (
                <p>{year} {isLeapYear ? 'is' : 'is not'} a leap year.</p>
            )}
        </div>
    );
}

export default LeapYearChecker;
