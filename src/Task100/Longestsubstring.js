import React, { useState } from 'react';

function LongestSubstring() {
    const [inputString, setInputString] = useState('');
    const [maxLength, setMaxLength] = useState(0);

    const handleChange = (event) => {
        setInputString(event.target.value);
    };

    const findLongestSubstringLength = () => {
        const charMap = {};
        let longestLength = 0;
        let left = 0;

        for (let right = 0; right < inputString.length; right++) {
            const currentChar = inputString[right];
            if (charMap[currentChar] !== undefined && charMap[currentChar] >= left) {
                left = charMap[currentChar] + 1;
            }
            charMap[currentChar] = right;
            longestLength = Math.max(longestLength, right - left + 1);
        }

        setMaxLength(longestLength);
    };

    return (
        <div>
            <h2>Longest Substring Without Repeating Characters</h2>
            <label>
                Enter String:
                <input type="text" value={inputString} onChange={handleChange} />
            </label>
            <button onClick={findLongestSubstringLength}>Find Length</button>
            <p>Length of the longest substring without repeating characters: {maxLength}</p>
        </div>
    );
}

export default LongestSubstring;
