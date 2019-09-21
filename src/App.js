import React from 'react';
import './App.css';
import {StepperComponent} from './StepperComponent';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux'
import { preloadedState } from './redux/preloadedState';
import { configureStore } from './redux/configureStore';
import { firebaseConfig } from './services.js/config';
import firebase from 'firebase';

firebase.initializeApp(firebaseConfig)


function App() {
  return (
    <Provider store={configureStore(preloadedState)}>

    <div className="App">
      <CssBaseline />
      <div className="logo-div">
        <img className="App-logo" src={require('./assets/logo_transparent_cropped.png')} alt="Moje Pivo"/>
      </div>
      <div className="stepper">

        <StepperComponent />
      </div>
    </div>
    </Provider >
  );
}

export default App;
