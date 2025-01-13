import React from 'react'

function StringObj() {
    let str = "I am a developer"
    let str1 = 'and trainer'
    let s= /am/
    let r= str.match(s)
    console.log(str.replace('I','u'))
    console.log(str.substring(2,6))
    console.log(r);
    console.log(str.at(-3)) //it displays the value of specified index
    console.log(str.charAt(3)) //same as at but it does not display the negative index
    console.log(str.concat(' ' ,str1))
    console.log(str.indexOf('I'))//opposite of at
    console.log(str.lastIndexOf('dev'))
    console.log(str.match(s))
    console.log(str.search(s))
    console.log(str.slice(2,6))
    console.log(str.split(' '))
    console.log(str.substring(0,8))
    console.log(str.toUpperCase())
    console.log(str.toString())
    // console.log(str.length())


//     The slice and substring methods in JavaScript's String object are used to extract parts of a string, but they have some differences 
// in how they handle their arguments and certain edge cases. Here's a detailed comparison:

// Syntax
// slice(startIndex, endIndex)
// substring(startIndex, endIndex)
// Both methods take two parameters:

// startIndex: The index at which to start the extraction.
// endIndex: The index before which to end the extraction. This means the character at this index is not included. If endIndex is omitted, 
// extraction continues to the end of the string.
// Differences
// Handling of Negative Indexes:

// slice: Accepts negative indexes, which count back from the end of the string.
// substring: Treats negative indexes as 0.
// javascript
// Copy code
// let str = "Hello, world!";
// console.log(str.slice(-6, -1)); // "world"
// console.log(str.substring(-6, -1)); // ""
// Swapping Parameters:

// slice: If the startIndex is greater than the endIndex, it returns an empty string.
// substring: If the startIndex is greater than the endIndex, it swaps the two values and then extracts the substring.
// javascript
// Copy code
// let str = "Hello, world!";
// console.log(str.slice(7, 2)); // ""
// console.log(str.substring(7, 2)); // "llo, "
// Handling of Parameters Out of Range:

// Both methods treat an out-of-range startIndex as being the start or end of the string respectively.
// Both methods treat an out-of-range endIndex as the end of the string.
// javascript
// Copy code
// let str = "Hello, world!";
// console.log(str.slice(0, 50)); // "Hello, world!"
// console.log(str.substring(0, 50)); // "Hello, world!"
// Examples
// Using slice:
// javascript
// Copy code
// let str = "Hello, world!";
// console.log(str.slice(0, 5));  // "Hello"
// console.log(str.slice(7));     // "world!"
// console.log(str.slice(-6, -1)); // "world"
// Using substring:
// javascript
// Copy code
// let str = "Hello, world!";
// console.log(str.substring(0, 5));  // "Hello"
// console.log(str.substring(7));     // "world!"
// console.log(str.substring(7, 2));  // "llo, "
// Summary
// Negative Indexes: Use slice if you need to handle negative indexes.
// Parameter Swapping: Use substring if you want to handle cases where startIndex might be greater than endIndex without 
//returning an empty string.
// General Use: Both methods are useful for extracting parts of a string, but their differences make them suitable for different scenarios.


  return (
    <div>
      <h1>String Objects</h1>
    {str.toUpperCase()}
    <br />
    {str.match(s)}
    <h1>{str.length}</h1>
    </div>
  )
}

export default StringObj
