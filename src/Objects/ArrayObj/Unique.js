import React from 'react'

function Unique() {
    const arr =[1,2,3,1,2,3,5];
    const elementCounts = {};
    const uniqueArr = [];
    arr.forEach((element) => {
      elementCounts[element] = (elementCounts[element]||0) +1;
      if(elementCounts[element]===1){
        uniqueArr.push(element);
      }
    })
  return (
    <div>
      <p>Orig Array:{arr.join(', ')}</p>
      <p>Unique elements:{uniqueArr.join(', ')}</p>
    </div>
  )
}

export default Unique
