import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MontyHallSimulator from './components/MontyHallSimulator';
import BinomialDistributionSimulator from './components/BinomialDistributionSimulator';
import BirthdayParadoxSimulator from './components/BirthdayParadoxSimulator';

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
          <MontyHallSimulator />
        </TabPanel>

        <TabPanel>
          <BinomialDistributionSimulator />
        </TabPanel>

        <TabPanel>
          <BirthdayParadoxSimulator />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default App;