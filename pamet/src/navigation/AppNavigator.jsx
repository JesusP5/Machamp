import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingApp from "../views/LoadingApp";
import Welcome from "../views/Welcome";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import EditProfile from "../views/EditProfile";
import QRCode from "../views/QRCode";
import Patient from "../views/Patient";
import ScanQRCode from "../views/ScanQRCode";
import PersonaQR from "../views/PersonaQR";

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
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="QRCode" component={QRCode} />
      <Stack.Screen name="Patient" component={Patient} />
      <Stack.Screen name="ScanQRCode" component={ScanQRCode} />
      <Stack.Screen name="PersonaQR" component={PersonaQR} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
