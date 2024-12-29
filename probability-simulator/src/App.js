import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MontyHallSimulator from './components/MontyHallSimulator';
import BinomialDistributionSimulator from './components/BinomialDistributionSimulator';
import BirthdayParadoxSimulator from './components/BirthdayParadoxSimulator';
import './App.css'; 

function App() {
  return (
    <div>
      <h1>Probability Simulator</h1>
      <Tabs>
        <TabList>
          <Tab>Monty Hall Problem</Tab>
          <Tab>Binomial Distribution</Tab>
          <Tab>Birthday Paradox</Tab>
        </TabList>

        <TabPanel>
            <h2>Monty Hall Problem</h2>
            <p>
                The Monty Hall problem is a famous probability puzzle based on a game show scenario. In the game, there are three doors: behind one is a car (the prize), and behind the other two are goats. After the contestant chooses a door, the host, Monty, opens one of the remaining doors to reveal a goat. The contestant is then given a choice to switch their selection or stick with the original choice. 
                <br />
                <strong>Calculation:</strong> The probability of winning by switching doors is 2/3, while the probability of winning by staying with the original choice is 1/3.
            </p>
          <MontyHallSimulator />
        </TabPanel>

        <TabPanel>
            <h2>Binomial Distribution</h2>
            <p>
              The binomial distribution models the number of successes in a fixed number of trials of a binary (yes/no) experiment. It is based on two parameters: the number of trials (n) and the probability of success (p). The distribution is used when the trials are independent, and each trial has only two possible outcomes.
              <br />
              <strong>Calculation:</strong> The probability of exactly k successes in n trials is calculated using the binomial formula: 
              <br />
              P(X = k) = (n choose k) * p^k * (1 - p)^(n - k), where (n choose k) = n! / (k!(n - k)!).
            </p>
          <BinomialDistributionSimulator />
        </TabPanel>

        <TabPanel>
            <h2>Birthday Paradox</h2>
            <p>
                The Birthday Paradox demonstrates how a group of people is more likely to share a birthday than we intuitively expect. It’s based on the probability that in a group of n people, at least two will have the same birthday.
                <br />
                <strong>Calculation:</strong> The probability that at least two people share the same birthday is calculated by first determining the probability that no one shares a birthday, then subtracting that from 1. The formula is: 
                <br />
                P(at least 2 share a birthday) = 1 - P(no one shares a birthday).
            </p>
            <BirthdayParadoxSimulator />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;