import React from 'react';
import './App.css';
import HorizontalNonLinearAlternativeLabelStepper from './Form';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux'
import { preloadedState } from './redux/preloadedState';
import { configureStore } from './redux/configureStore';


function App() {
  return (
    <Provider store={configureStore(preloadedState)}>

    <div className="App">
      <CssBaseline />
      <div className="logo-div">
        <img className="App-logo" src={require('./assets/logo_transparent_cropped.png')} alt="Moje Pivo"/>
      </div>
      <div className="stepper">

        <HorizontalNonLinearAlternativeLabelStepper />
      </div>
    </div>
    </Provider >
  );
}

export default App;
