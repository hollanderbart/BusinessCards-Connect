import React from 'react';
import { useHttpDrip } from './hooks/useHttpDrip';
import { View, Text } from 'react-native';

function App() {
  useHttpDrip();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello</Text>
    </View>
  );
}

export default App;
