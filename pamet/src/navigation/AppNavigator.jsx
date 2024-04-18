import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoadingApp from '../views/LoadingApp';
import Welcome from '../views/Welcome';
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    
        <Stack.Navigator
        screenOptions={{
          headerShown:false
          }}>
          <Stack.Screen name="LoadingApp" component={LoadingApp} />
          <Stack.Screen name="Welcome" component={Welcome} />
        </Stack.Navigator>
 
  );
}

export default AppNavigator;
