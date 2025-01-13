// import React from 'react'

// function RemoveDup() {
//     function removeDuplicates(arr) {
//         const uniqueElements = [];
      
//         for (let i = 0; i < arr.length; i++) {
//           let isDuplicate = false;
      
//           for (let j = 0; j < uniqueElements.length; j++) {
//             if (arr[i] === uniqueElements[j]) {
//               isDuplicate = true;
//               break;
//             }
//           }
      
//           if (!isDuplicate) {
//             uniqueElements.push(arr[i]);
//           }
//         }
      
//         return uniqueElements;
//       }
      
//       // Example usage
//       const array = [1, 2, 3, 2, 4, 3, 5, 1];
//       const uniqueArray = removeDuplicates(array);
//       console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
      
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default RemoveDup


import React from 'react'

function RemoveDup() {
    let arr=[1,2,2]
    let uni =[]
    for(let i in arr){
        for(let j in arr){
            if(i!==j){
                if(arr[i]===arr[j])
                {
                
                }
            }
        }
    }

    console.log(uni)
  return (
    <div>
      
    </div>
  )
}

export default RemoveDup

