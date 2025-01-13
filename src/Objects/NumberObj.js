import React from 'react'

function NumberObj() {
    let a= 5454656767;
   let b=5.778899
   let c=true
    console.log(a.toExponential(3));
    console.log(b.toFixed(2));
    console.log(a.toLocaleString());
    console.log(b.toPrecision(2));
    console.log(b.toString());
    console.log(b.valueOf());
    console.log(c.toString())
    console.log(c.valueOf());
    console.log(Number.MAX_SAFE_INTEGER)
    console.log(Number.EPSILON)
    console.log(Number.MAX_VALUE)
    console.log(Number.POSITIVE_INFINITY)
    console.log(Number.NEGATIVE_INFINITY)
    console.log(parseInt(b))
    console.log(isFinite(c))

  return (
    <div>
      {typeof(b)}
    </div>
  )
}

export default NumberObj
