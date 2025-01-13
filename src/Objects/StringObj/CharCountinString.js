import React, { useState } from 'react';

function CharacterCounter() {
    const [inputString, setInputString] = useState('');
    const [targetCharacter, setTargetCharacter] = useState('');
    const [occurrences, setOccurrences] = useState(0);

    const handleChange = (event) => {
        setInputString(event.target.value);
    };

    const handleCharacterChange = (event) => {
        setTargetCharacter(event.target.value);
    };

    const countOccurrences = () => {
        // Count occurrences of the target character in the input string
        const count = inputString.split(targetCharacter).length - 1;
        console.log(inputString.split(targetCharacter))
        setOccurrences(count);
    };

    return (
        <div>
            <h2>Character Occurrence Counter</h2>
            <label>
                Input String:
                <input type="text" value={inputString} onChange={handleChange} />
            </label>
            <br />
            <label>
                Target Character:
                <input type="text" value={targetCharacter} onChange={handleCharacterChange} maxLength={1} />
            </label>
            <br />
            <button onClick={countOccurrences}>Count Occurrences</button>
            <p>Occurrences of "{targetCharacter}": {occurrences}</p>
        </div>
    );
}

export default CharacterCounter;
