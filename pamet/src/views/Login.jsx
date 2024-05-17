import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GenericInput from "../components/GenericInput";
import ButtonGenericWhite from "../components/ButtonGenericWhite";
import color from "../assets/Colors";


function Login({ navigation }) {
  const handlePress = () => {
    navigation.navigate("PersonalQR");
  };
  const SignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <SafeAreaView style={styles.container}>
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
