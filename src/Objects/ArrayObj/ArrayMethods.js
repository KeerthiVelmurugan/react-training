import React from 'react'

function ArrayMethods() {
let arr = [3,4,5,8,9]

let newarr = arr.every((i) => i>2)
console.log(newarr)

arr.forEach((i) => {
    if(i>=2){
        console.log(i)
    }
})
arr.forEach((i) => {
  console.log(i)
})
console.log(arr.splice(0,1,88))// index, no of elements to delete, element to add
console.log(arr);
console.log(arr.splice(3,0,67));
console.log(arr);
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 15


const numbers1= [1, 2, 3, 4, 5];
const hasEvenNumber = numbers1.some(num => num % 2 === 0);
console.log(hasEvenNumber);

console.log(arr.some(i => i%2===0))

const number = [1, 2, 3];
const doubled = number.map(num => num * 2);
console.log(doubled);

const numb = [1, 2, 3, 4, 5];
const evenNumbers = numb.filter(num => num % 2 === 0);
console.log(evenNumbers);
let num = [1,2,3]
console.log(num.entries(2))
console.log(num)


  return (
    <div>
      
    </div>
  )
}

export default ArrayMethods
