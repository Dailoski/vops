import React from 'react';
import './App.css';
//import {StepperComponent} from './StepperComponent';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux'

import { preloadedState } from './redux/preloadedState';
import { configureStore } from './redux/configureStore';
import { firebaseConfig } from './services/config';
import firebase from 'firebase';
import styled from 'styled-components'
import { messages } from './localization/locales';
import { LanguageProvider } from './localization/LanguageProvider';
import { MainPage } from './pages/MainPage';
import { BeerList } from './pages/BeerList';
import {
  BrowserRouter as Router,
  Route } from "react-router-dom";
const StyledApp = styled.div`
 height: 100vh;
 
`
// const LogoContainer = styled.div`
//   height: 10vh;
// `
// const ContentContainer = styled.div`
//   height: 90vh;
//   display: flex;
//   flex-wrap: wrap;
// `

firebase.initializeApp(firebaseConfig)

function App() {
  console.log(messages)
  return (

    <StyledApp className="App">
      <Provider store={configureStore(preloadedState)}>
        <LanguageProvider >
          <CssBaseline />
          <Router>
           
            <Route path="/choose-beer">
              <BeerList />
            </Route>
            <Route path="/home">
              <MainPage />
            </Route>

          </Router>
        </LanguageProvider>
      </Provider >
    </StyledApp>
  );
}

export default App;
