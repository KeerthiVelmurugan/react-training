import React from 'react'

function ForIn() {
    const person = {fname:"John", lname:"Doe", age:25};
    const num = [1,2,3,4,5];
let text = "";
for (let x in person) {
//   text += person[x] + " ";
  console.log(person[x]);
}
for( let i in num){
    console.log(num[i]);
}
let j=0;
while(j<=5){
    console.log(j)

    if(j===3){
    break;
    
}
j++;
}
  return (
    <div>
      
    </div>
  )
}

export default ForIn

