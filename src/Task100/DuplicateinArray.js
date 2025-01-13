import React, { useState } from 'react';

function RemoveDuplicates() {
    const [inputArray, setInputArray] = useState([]);
    const [uniqueArray, setUniqueArray] = useState([]);

    const handleChange = (event) => {
        const array = event.target.value.split(',');
        setInputArray(array);
    };

    const removeDuplicates = () => {
        const newArray = inputArray.filter((item, index) => {
            console.log(inputArray.indexOf(item))
            
            return inputArray.indexOf(item) === index;
           
            
        });
        setUniqueArray(newArray);
    };
    // const array = [1, 2, 3, 4, 4, 5, 5];
    // const uniqueArray = [];
    
    // for (let i = 0; i < array.length; i++) {
    //   if (uniqueArray.indexOf(array[i]) === -1) {
    //     uniqueArray.push(array[i]);
    //   }
    // }
    
    // console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

//     // using Set
//     const array = [1, 2, 3, 4, 4, 5, 5];
// const uniqueArray = [...new Set(array)];
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// Using filter

// const array = [1, 2, 3, 4, 4, 5, 5];
// const uniqueArray = array.filter((item, index) => array.indexOf(item) === index);
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]


// Using reduce
// const array = [1, 2, 3, 4, 4, 5, 5];
// const uniqueArray = array.reduce((accumulator, currentValue) => {
//   if (!accumulator.includes(currentValue)) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []);
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]


    
    return (
        <div>
            <h2>Remove Duplicates from Array</h2>
            <label>
                Input Array:
                <input type="text" onChange={handleChange} />
            </label>
            <button onClick={removeDuplicates}>Remove Duplicates</button>
            <div>
                <p>Original Array: {inputArray.join(', ')}</p>
                <p>Array without Duplicates: {uniqueArray.join(', ')}</p>
            </div>
        </div>
    );
}

export default RemoveDuplicates;
