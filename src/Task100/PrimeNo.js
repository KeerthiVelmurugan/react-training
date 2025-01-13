import React, { useState } from 'react';

function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

function PrimeChecker() {
    const [number, setNumber] = useState('');
    const [isPrimeNumber, setIsPrimeNumber] = useState(null);

    const handleChange = (event) => {
        setNumber(event.target.value);
    };

    const handleClick = () => {
        const num = parseInt(number);
        setIsPrimeNumber(isPrime(num));
    };
    console.log(Math.sqrt(7))
    return (
        <div>
            <h2>Prime Number Checker</h2>
            <input type="text" value={number} onChange={handleChange} />
            <button onClick={handleClick}>Check</button>
            {isPrimeNumber !== null && (
                <p>{isPrimeNumber ? `${number} is a prime number.` : `${number} is not a prime number.`}</p>
            )}
        </div>
    );
}

export default PrimeChecker;
