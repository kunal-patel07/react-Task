import React, { useState } from 'react';

function Result() {
  // State to store input values
  const [math, setMath] = useState('');
  const [science, setScience] = useState('');
  const [chemistry, setChemistry] = useState('');

  // State to store submitted results
  const [results, setResults] = useState([]);

  // Function to calculate grade based on percentage
  function getGrade(percentage) {
    if (percentage <= 45) return 'C GRADE';
    if (percentage <= 65) return 'B GRADE';
    if (percentage <= 85) return 'A GRADE';
    return 'A+ GRADE';
  }

  // Function to handle form submit
  function handleSubmit(e) {
    e.preventDefault();

    // Convert input values to numb ers
    const m = Number(math);
    const s = Number(science);
    const c = Number(chemistry);

    // Check if inputs are valid numbers between 0 and 100
    if (
      isNaN(m) || isNaN(s) || isNaN(c) ||
      m > 100 || s > 100 || c > 100
    ) {
      alert('Please enter numbers only (0 to 100)');
      return;
    }

    const total = m + s + c;
    const percentage = total / 3;
    const grade = getGrade(percentage);

    // Add to results list
    const newResult = { math: m, science: s, chemistry: c, total, grade };
    setResults([...results, newResult]);

    // Clear inputs
    setMath('');
    setScience('');
    setChemistry('');
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Enter Subject Marks</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Math"
          value={math}
          onChange={(e) => setMath(e.target.value)}
        /><br /><br />

        <input
          type="text"
          placeholder="Science"
          value={science}
          onChange={(e) => setScience(e.target.value)}
        /><br /><br />

        <input
          type="text"
          placeholder="Chemistry"
          value={chemistry}
          onChange={(e) => setChemistry(e.target.value)}
        /><br /><br />

        <button type="submit">Submit</button>
      </form>

      <hr style={{ margin: '30px 0' }} />

      {results.length > 0 && (
        <div>
          <h3>Submitted Results</h3>
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Math</th>
                <th>Science</th>
                <th>Chemistry</th>
                <th>Total</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, index) => (
                <tr key={index}>
                  <td>{r.math}</td>
                  <td>{r.science}</td>
                  <td>{r.chemistry}</td>
                  <td>{r.total}</td>
                  <td>{r.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Result;
