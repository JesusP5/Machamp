import React from "react";
import { ScrollView, Button, Text, StyleSheet, Image , View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GenericInput from "../components/GenericInput";
import ButtonGenericWhite from "../components/ButtonGenericWhite";
import color from '../assets/Colors';
import PatientCard from "../components/PatientCard";

function Login({ navigation }) {
  const handlePress = () => {
    console.log("Bien");
  };
  const SignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaView style={styles.container}>

      <Image source={require('../assets/ImageTopU.png')} style={styles.background} />
      <Image source={require("../assets/LogoPamet.png")} style={styles.logo} />
      <GenericInput label="Username" placeholder="Username" />
      <GenericInput label="Password" placeholder="Password" secureTextEntry />
      <ButtonGenericWhite title="Log in" onPress={handlePress} backgroundColor={color.primary}/>
      <Text style={styles.textQuestion}>¿No tienes una cuenta?</Text><Button title="Sign Up" onPress={handlePress} />
    </SafeAreaView>
  );
}
styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
  },
  background: {
    position: "absolute",
    width: 530,
    height: 500,
    resizeMode: "cover",
    opacity: 1,
    borderRadius: 600 / 2,
    top: -280,
  },
  textQuestion: {
    marginTop: 20,
    fontSize: 16,
    marginBottom: 5,
    width: "80%",
    textAlign: "center",
    fontWeight: "bold",
  },
  logo:{
    marginTop: 30,
    width: 235,
    height: 232,
  }

});
export default Login;