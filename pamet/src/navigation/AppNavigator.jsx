import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingApp from "../views/LoadingApp";
import Welcome from "../views/Welcome";
import Login from "../views/Login";
import Register from "../views/Register";
const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoadingApp" component={LoadingApp} />
      
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
