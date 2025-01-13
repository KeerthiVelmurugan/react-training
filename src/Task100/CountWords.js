import React, { useState } from 'react';

function WordCounter() {
    const [inputString, setInputString] = useState('');
    const [wordCount, setWordCount] = useState(0);

    const handleChange = (event) => {
        setInputString(event.target.value);
    };

    const countWords = () => {
        const words = inputString.split(/\s+/).filter(word => word !== ''); // Split by whitespace
        setWordCount(words.length);
    };

    return (
        <div>
            <h2>Word Counter</h2>
            <label>
                Input String:
                <textarea value={inputString} onChange={handleChange} rows="4" cols="50" />
            </label>
            <br />
            <button onClick={countWords}>Count Words</button>
            <p>Number of words: {wordCount}</p>
        </div>
    );
}

export default WordCounter;
