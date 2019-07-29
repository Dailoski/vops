import React from 'react';
import './App.css';
import HorizontalNonLinearAlternativeLabelStepper from './Form';

function App() {
  return (
    <div className="App">
      <div className="logo-div">
        <img className="App-logo" src={require('./assets/logo_transparent_cropped.png')} alt="Moje Pivo"/>
        <HorizontalNonLinearAlternativeLabelStepper />
      </div>
      
    </div>
  );
}

export default App;
