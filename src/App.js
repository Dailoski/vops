import React from 'react';
import './App.css';
import {StepperComponent} from './StepperComponent';
import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux'

import { preloadedState } from './redux/preloadedState';
import { configureStore } from './redux/configureStore';
import { firebaseConfig } from './services.js/config';
import firebase from 'firebase';
import styled from 'styled-components'
import { messages } from './localization/locales';
import { LanguageProvider } from './localization/LanguageProvider';

const StyledApp = styled.div`
 height: 100vh;
 background-image: url("http://millswine.com/wp-content/uploads/2013/12/beer-texture.jpg");
 background-position-y: -600px;
`
const LogoContainer = styled.div`
  height: 10vh;
`
const ContentContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
`

firebase.initializeApp(firebaseConfig)

function App() {
  console.log(messages)
  return (

    <StyledApp className="App">
      <Provider store={configureStore(preloadedState)}>
        <LanguageProvider >
          <CssBaseline />
          <LogoContainer className="logo-div">
            <img className="app-logo" src={require('./assets/logo_transparent_cropped.png')} alt="Moje Pivo"/>
          </LogoContainer>
          <ContentContainer className="stepper">
            <StepperComponent fb={firebase} />
          </ContentContainer>
        </LanguageProvider>
       </Provider >
    </StyledApp>
  );
}

export default App;
