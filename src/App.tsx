import React from 'react';
import Router from './routes/router';
import { TrendingContextProvider } from './contexts/TrendingInfos';
import { StatusBar } from 'react-native';

function App(): JSX.Element {
  return (
    <>
      <StatusBar
        backgroundColor='#fff'
        barStyle='dark-content'
        />
      <TrendingContextProvider>
        <Router />
      </TrendingContextProvider>
    </>
  );
}

export default App;
