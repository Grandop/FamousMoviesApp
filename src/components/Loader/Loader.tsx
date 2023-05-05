import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export const Loader = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="large" color="#bde0fe" />
    </View>
  );
};

export default Loader;