import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native';
import ButtonGeneric from '../components/ButtonGeneric';

function Welcome({ navigation }) {
  const handlePress = () => {
    console.log('Bien')
  }
  return (
    <SafeAreaView style={styles.safearea}>
      <Text>Welcome</Text>
      <ButtonGeneric title="Log in with your account" onPress={handlePress} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1, 
    alignItems: 'center',
    textAlign: 'center'
  }
})

export default Welcome;
