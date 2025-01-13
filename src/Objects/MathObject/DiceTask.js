// import React, { useState } from 'react'


// function Dicetask() {
//    let  [dice1,setDice1]= useState()

// function RollDice(){
//         let roll=Math.floor(Math.random() * 6) + 1;
//         setDice1(roll);
// }

// let diceStyles={
//     container:{
//         textAlign:'center',
//         marginTop: '50px'
//     },
//     dice:{
//         width:'100px',
//         height:'100px',
//         backgroundColor:'white',
//         border:'2px solid #000',
//         borderRadius:'10px',
//         display:'flex',
//         flexWrap:'wrap',
//         justifyContent:'center',
//         alignItems:'center',
//         position:'relative',
//         margin:' 0 auto',
        
//     },

//     dot:{
//         width:'20px',
//         height:'20px', 
//         backgroundColor:'red',
//         color:'black',
//         borderRadius:'50%',
//         margin:'5px'
//     }
// };
// let renderDots=(num)=>{
//     let dotsArray=[];
//     for(let i=0;i<num;i++){
//         dotsArray.push(<div key={i} style={diceStyles.dot}></div>);
//     }
//     return dotsArray;
// };

// return (

// <div style={diceStyles.container}>Dicetask
// <h1>ROLL A DICE TASK</h1>
// <button onClick={RollDice}>CLICK TO ROLL A DICE</button>
// <h1>Your rolled dice number is:{dice1}</h1>
// <div style={diceStyles.dice}>
//     {renderDots(dice1)}
//     </div>
//     </div>
//   )
// }
// export default Dicetask


import React, { useState } from 'react';

function Dicetask() {
  const [dice1, setDice1] = useState(null);
  const [rolling, setRolling] = useState(false);

  function RollDice() {
    setRolling(true);
    setTimeout(() => {
      let roll = Math.floor(Math.random() * 6) + 1;
      setDice1(roll);
      setRolling(false);
    }, 1000); // Simulate rolling for 1 second
  }

  const diceStyles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
    },
    dice: {
      width: '100px',
      height: '100px',
      backgroundColor: 'white',
      border: '2px solid #000',
      borderRadius: '10px',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      margin: '0 auto',
      animation: rolling ? 'roll 1s infinite' : 'none',
    },
    dot: {
      width: '20px',
      height: '20px',
      backgroundColor: 'red',
      color: 'black',
      borderRadius: '50%',
      margin: '5px',
    },
  };

  const renderDots = (num) => {
    let dotsArray = [];
    for (let i = 0; i < num; i++) {
      dotsArray.push(<div key={i} style={diceStyles.dot}></div>);
    }
    return dotsArray;
  };

  return (
    <div style={diceStyles.container}>
      <h1>ROLL A DICE TASK</h1>
      <button onClick={RollDice} disabled={rolling}>
        {rolling ? 'ROLLING...' : 'CLICK TO ROLL A DICE'}
      </button>
      {dice1 !== null && <h1>Your rolled dice number is: {dice1}</h1>}
      <div style={diceStyles.dice}>
        {renderDots(dice1)}
      </div>
      <style>
        {`
          @keyframes roll {
            0% { transform: rotate(0deg); }
            25% { transform: rotate(90deg); }
            50% { transform: rotate(180deg); }
            75% { transform: rotate(270deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}

export default Dicetask;
