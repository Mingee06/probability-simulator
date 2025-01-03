import React, { useState } from 'react';


function BirthdayParadoxSimulator() {
  const [groupSize, setGroupSize] = useState(23);
  const [probability, setProbability] = useState(null);

  const calculateProbability = () => {
    let probNoMatch = 1.0;

    for (let i = 0; i < groupSize; i++) {
      probNoMatch *= (365 - i) / 365;
    }

    const probMatch = 1 - probNoMatch;
    setProbability(probMatch);
  };

  return (
    <div>
      <h2>Birthday Paradox Simulator</h2>
      <label>
        Group Size:
        <input
          type="number"
          value={groupSize}
          onChange={(e) => setGroupSize(Number(e.target.value))}
        />
      </label>
      <br />
      <button onClick={calculateProbability}>Calculate Probability</button>
      {probability !== null && (
        <p>
          The probability of at least two people sharing a birthday in a group of {groupSize} is{' '}
          <strong>{(probability * 100).toFixed(2)}%</strong>.
        </p>
      )}
    </div>
  );
}

export default BirthdayParadoxSimulator;