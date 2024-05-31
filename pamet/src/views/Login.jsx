import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GenericInput from "../components/GenericInput";
import ButtonGenericWhite from "../components/ButtonGenericWhite";
import color from "../assets/Colors";
import users from "../models/usuarios";
import Header from "../components/header";

function Login({ navigation, route }) {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (route.params?.email) {
      setEmail(route.params.email);
    }
  }, [route.params?.email]);

  const hangleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const findUser = () => {
    console.log(email, password);
    const user = users.find((user) => user.email === email);
    if (user) {
      if (user.password === password) {
        console.log("Bienvenido");
        navigation.navigate("PersonaQR", user);
      } else {
        console.log("Contraseña incorrecta");
        setError(true);
      }
    } else {
      console.log("Usuario no encontrado");
      setError(true);
    }
  };

  const handlePress = () => {
    findUser();
    // console.log("Bien");
    // navigation.navigate("PersonaQR");
  };
  const SignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <Header onBack={() => navigation.goBack()} />
      <Image source={require("../assets/LogoPamet.png")} style={styles.logo} />
      {error == true ? (
        <Text style={{ fontSize: 16, fontWeight: "light", color: "red" }}>
          Correo electronico o contraseña incorrectos
        </Text>
      ) : null}
      <View style={{ width: "65%" }}>
        <GenericInput
          placeholder="Correo Electronico"
          value={email}
          onChangeText={hangleEmailChange}
        />
      </View>
      <View style={{ width: "65%" }}>
        <GenericInput
          placeholder="Contraseña"
          value={password}
          onChangeText={handlePasswordChange}
        />
      </View>
      <View style={{ flexDirection: "row", marginTop: 25, width: "50%" }}>
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
          Registrarse
        </Text>
      </Text>
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    textAlign: "center",
    marginTop: 0,
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
  },
});
export default Login;
