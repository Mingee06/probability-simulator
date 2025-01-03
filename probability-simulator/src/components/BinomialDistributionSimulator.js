import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

function BinomialDistributionSimulator() {
  const [trials, setTrials] = useState(1000);
  const [probability, setProbability] = useState(0.5);
  const [results, setResults] = useState(null);

  const runSimulation = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/simulate_binomial', {
        trials,
        probability,
      });
      setResults(response.data.results);
    } catch (error) {
      console.error('Error running simulation:', error);
    }
  };

  return (
    <div>
      <h2>Binomial Distribution Simulator</h2>
      <label>
        Number of Trials:
        <input
          type="number"
          value={trials}
          onChange={(e) => setTrials(Number(e.target.value))}
        />
      </label>
      <br />
      <label>
        Probability of Success:
        <input
          type="number"
          step="0.01"
          value={probability}
          onChange={(e) => setProbability(Number(e.target.value))}
        />
      </label>
      <br />
      <button onClick={runSimulation}>Run Simulation</button>
      {results && (
        <Bar
          data={{
            labels: Object.keys(results),
            datasets: [
              {
                label: 'Frequency',
                data: Object.values(results),
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
              },
            ],
          }}
          options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      )}
    </div>
  );
}

export default BinomialDistributionSimulator;
