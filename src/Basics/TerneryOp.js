import React from 'react'

function TerneryOp() {
    let score = 85;

let grade = score >= 90 ? 'A' :
            score >= 80 ? 'B' :
            score >= 70 ? 'C' :
            score >= 60 ? 'D' : 'F';

console.log(`The grade is: ${grade}`); // Output: The grade is: B

let age = 25;
let isStudent = true;

let category = age < 18 ? 'Minor' :
               age >= 18 && age <= 25 ? (isStudent ? 'College Student' : 'Young Adult') :
               age > 25 && age <= 60 ? 'Adult' : 'Senior';

console.log(`The category is: ${category}`); // Output: The category is: College Student


  return (
    <div>
      
    </div>
  )
}

export default TerneryOp
