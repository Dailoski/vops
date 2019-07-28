import React from 'react';
import './App.css';
import HorizontalNonLinearAlternativeLabelStepper from './Form';

function App() {
  return (
    <div className="App">
      <img className="App-logo" src={require('./assets/logo_transparent.png')} alt="Moje Pivo"/>
      <HorizontalNonLinearAlternativeLabelStepper />
    </div>
  );
}

export default App;
