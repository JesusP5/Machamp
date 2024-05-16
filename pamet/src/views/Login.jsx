import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GenericInput from "../components/GenericInput";
import ButtonGenericWhite from "../components/ButtonGenericWhite";
<<<<<<< HEAD
import color from '../assets/Colors';
=======
import color from "../assets/Colors";


>>>>>>> 0c2d963c354e5038d1c4aa9c5f82159589db030e
function Login({ navigation }) {
  const handlePress = () => {
    console.log("Bien");
  };
  const SignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaView style={styles.container}>
<<<<<<< HEAD
      <Image source={require('../assets/ImageTopU.png')} style={styles.background} />
=======
>>>>>>> 0c2d963c354e5038d1c4aa9c5f82159589db030e
      <Image source={require("../assets/LogoPamet.png")} style={styles.logo} />
      <GenericInput placeholder="Correo Electronico" />
      <GenericInput placeholder="Contraseña" />
      <View style={{ flexDirection: "row", marginTop: 25, width:'50%' }}>
      <ButtonGenericWhite
        title="Iniciar Sesion"
        onPress={handlePress}
        backgroundColor={color.primary}
        style={{ marginTop: 50 }}
      />
      </View>
      <Text style={styles.textQuestion}>
        ¿No tienes una cuenta?
        <Text onPress={SignUp} style={styles.SignUp}>
          {" "}
          Registrarse
        </Text>
      </Text>
    </SafeAreaView>
  );
}
styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    marginTop: 50,
    backgroundColor: "white",
  },
  textQuestion: {
    marginTop: 20,
    fontSize: 16,
    width: "80%",
    textAlign: "center",
    fontWeight: "bold",
  },
  logo: {
    marginTop: 30,
    width: 235,
    height: 232,
  },
  SignUp: {
    color: color.primary,
    fontSize: 16,
    fontWeight: "normal",
  }
});
export default Login;
