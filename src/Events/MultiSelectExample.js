import React, { useState } from 'react';

function MultiSelectExample() {
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSelectChange = (e) => {
        const selectedValues = Array.from(e.target.selectedOptions, option => option.value);

        setSelectedOptions(selectedValues);
    };

    const handleSubmit = () => {
        console.log('Selected options:', selectedOptions);
    };

    return (
        <div>
            <h3>Select Multiple Options</h3>
            <select multiple={true} value={selectedOptions} onChange={handleSelectChange}>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
            </select>
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default MultiSelectExample;
