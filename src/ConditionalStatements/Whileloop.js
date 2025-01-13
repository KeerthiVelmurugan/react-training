// import React, { useState } from 'react'

// function Whileloop() {
//     const [result, setResult] = useState([])
//     let i=0
//     while(i<10){
//         result.push(i)
//         i++
//     }
//   return (
//     <div>
//       {result}
//       <br />
//     </div>
//   )
// }

// export default Whileloop

import React, { useState } from 'react';

function Whileloop() {
  const [limit, setLimit] = useState('');
  const [result, setResult] = useState([]);

  const handleChange = (event) => {
    setLimit(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const numLimit = parseInt(limit);
    if (!isNaN(numLimit) && numLimit > 0) {
      let i = 1;
      let tempResult = [];
      while (i <= numLimit) {
        tempResult.push(i);
        i++;
      }
      setResult(tempResult);
    } else {
      alert('Please enter a valid positive number!');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Limit:
          <input type="number" value={limit} onChange={handleChange} />
        </label>
        <button type="submit">Print Numbers</button>
      </form>
      <div>
        {result.map((number, index) => (
          <div key={index}>{number}</div>
        ))}
      </div>
    </div>
  );
}

export default Whileloop;

