import React, { useState } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



function MontyHallSimulator() {
  const [trials, setTrials] = useState(1000);
  const [switchStrategy, setSwitchStrategy] = useState(true);
  const [results, setResults] = useState(null);

  const runSimulation = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/simulate_monty_hall', {
        trials,
        switch: switchStrategy,
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error running simulation:', error);
    }
  };

  return (
    <div>
      <h1>Monty Hall Problem Simulator</h1>
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
        Strategy:
        <select
          value={switchStrategy}
          onChange={(e) => setSwitchStrategy(e.target.value === 'true')}
        >
          <option value="true">Switch</option>
          <option value="false">Stay</option>
        </select>
      </label>
      <br />
      <button onClick={runSimulation}>Run Simulation</button>
        {results && (
          <div>
            <h2>Results</h2>
            <Bar
              data={{
                labels: ['Stay Wins', 'Switch Wins'],
                datasets: [
                  {
                    label: 'Wins',
                    data: [results.stay_wins, results.switch_wins],
                    backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)'],
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: 'Monty Hall Problem Results',
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        )}
      
    </div>
  );
}

export default MontyHallSimulator;
