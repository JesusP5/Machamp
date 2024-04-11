import React from 'react';
import { View, Text, Button } from 'react-native';

function LoadingApp({ navigation }) {
  return (
    <View>
      <Text>LOADING...</Text>
      <Button
        title="Go to Screen B"
        onPress={() => navigation.navigate('Welcome')}
      />
    </View>
  );
}

export default LoadingApp;
