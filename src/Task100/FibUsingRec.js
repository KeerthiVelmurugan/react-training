// import React from 'react';

// function FibUsingRec({ n }) {
//   const fibonacci = (n) => {
//     if (n <= 1) {
//       return n;
//     } else {
       
//       return fibonacci(n - 1) + fibonacci(n - 2);
//     }
//   };

//   return (
//     <div>
//       <h2>Fibonacci Series</h2>
//       <ul>
//         {[...Array(n)].map((_, index) => (
//           <li key={index}>Fibonacci({index}) = {fibonacci(index)}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FibUsingRec;


import React, { useState, useEffect } from 'react';

function FibUsingRec() {
  const [fibSeries, setFibSeries] = useState([]);
  let n=10

  const fibonacci = (num) => {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
  };

  const generateFibSeries = () => {
    const series = [];
    for (let i = 0; i < n; i++) {
      series.push(<div>{fibonacci(i)}</div>);
    }
    setFibSeries(series);
  };

//   useEffect(() => {
//     generateFibSeries();
//   }, [n]);



  return (
    <div>
      <h2>Fibonacci Series (Up to {n} numbers)</h2>
      <button onClick={generateFibSeries} >click</button>
      {/* <ul>
        {fibSeries.map((num, index) => (
          <li key={index}>Fibonacci({index}) = {num}</li>
        ))}
      </ul> */}
      {fibSeries}
    </div>
  );
}

export default FibUsingRec;

