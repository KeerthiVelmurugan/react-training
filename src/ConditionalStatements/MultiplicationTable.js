import React from 'react';

const MultiplicationTable = ({ number, range }) => {
  const generateTable = () => {
    const tableRows = [];

    for (let i = 1; i <= range; i++) {
      const result = number * i;
      console.log(`${number} X ${i} = ${result}`)
      tableRows.push(
        <tr key={i}>
          <td>{number}</td>
          <td>×</td>
          <td>{i}</td>
          <td>=</td>
          <td>{result}</td>
        </tr>
      );
    }

    return tableRows;
  };

  return (
    <div>
      <h2>Multiplication Table for {number}</h2>
      <table>
        <thead>
          <tr>
            <th>Multiplicand</th>
            <th></th>
            <th>Multiplier</th>
            <th></th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default MultiplicationTable;
