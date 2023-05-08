import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Router from './routes/router';
import { TrendingContextProvider } from './contexts/TrendingInfos';

function App(): JSX.Element {
  return (
    <TrendingContextProvider>
      <Router />
    </TrendingContextProvider>
  );
}

export default App;
