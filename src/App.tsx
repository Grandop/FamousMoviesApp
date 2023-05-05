import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Router from './routes/router';
import { MovieContexteProvider } from './contexts/TrendingInfos';

function App(): JSX.Element {
  return (
    <MovieContexteProvider>
      <Router />
    </MovieContexteProvider>
  );
}

export default App;
