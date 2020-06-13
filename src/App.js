import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/title'
import TotalFunds from './components/totalFunds'
import SliderBar from './components/sliderBar'

function App() {
  const [ funds, setFunds ] = useState(1000000000)
  const [ percentage, setPercentage] = useState(0)

  const handlePercentage = (value) => {
    setPercentage(value)
  }

  return (
    <div className="App">

      <header className="App-header">
        <Title />
        <TotalFunds funds={funds} />
        <SliderBar handlePercentage={handlePercentage}/>
        <p>Percentage: {percentage}</p>
      </header>
    </div>
  );
}

export default App;
