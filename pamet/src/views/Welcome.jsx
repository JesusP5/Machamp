// Ejemplo de ScreenA.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import GenericInput from '../components/GenericInput';

function Welcome({ navigation }) {
  return (
    <View>
      <Text>Welcome</Text>
      <GenericInput label="Email" placeholder="Ingresa tu email" />
      <GenericInput label="Password" placeholder="Ingresa tu password" />
      
    </View>
  );
}

export default Welcome;
