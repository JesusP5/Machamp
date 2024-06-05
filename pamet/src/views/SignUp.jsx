import React, { useState } from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import GenericInput from "../components/GenericInput";
import ButtonGenericWhite from "../components/ButtonGenericWhite";
import color from "../assets/Colors";
import * as ImagePicker from "expo-image-picker";



export default function SignUp({ navigation }) {
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [imageSource, setImageSource] = useState(
    require("../assets/photo.jpg")
  );
  const handlePress = () => {
    const data = {
      username: name + " " + lastName,
      borndate: day + "/" + month + "/" + year,
      email: email,
      password: password,
      image: imageSource,
    };
    navigation.navigate("Login", data);
  };

  const handleImgPress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });



    if (!result.cancelled) {
      setImageSource({ uri: result.assets[0].uri });
    }
  };

  return (
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        <Header onBack={() => navigation.goBack()} />
        <View style={styles.cont}>
          <Text style={styles.title}>Ingresa tus datos</Text>
          <TouchableOpacity onPress={handleImgPress} style={styles.imgcont}>
            <Image source={imageSource} style={styles.image} />
          </TouchableOpacity>

          <View style={styles.box}>
            <GenericInput
              value={name}
              onChangeText={setName}
              placeholder="Nombre"
            />
            <GenericInput
              value={lastName}
              onChangeText={setLastname}
              placeholder="Apellido"
            />
          </View>
          <View style={styles.borntitle}>
            <Text>Selecciona tu fecha de nacimiento:</Text>
          </View>
          <View style={{ width: "65%", flexDirection: "row" }}>
            <View style={{ width: "33%" }}>
              <GenericInput
                keyboardType="numeric"
                value={day}
                onChangeText={setDay}
                placeholder="DD"
              />
            </View>
            <View style={{ width: "33%" }}>
              <GenericInput
                keyboardType="numeric"
                value={month}
                onChangeText={setMonth}
                placeholder="MM"
              />
            </View>
            <View style={{ width: "33%" }}>
              <GenericInput
                keyboardType="numeric"
                value={year}
                onChangeText={setYear}
                placeholder="AAAA"
              />
            </View>
          </View>
          <View style={styles.box}>
            <GenericInput
              value={email}
              onChangeText={setEmail}
              placeholder="Correo Electronico"
            />
            <GenericInput
              value={password}
              onChangeText={setPassword}
              placeholder="Contraseña"
            />
          </View>
          <View style={{ flexDirection: "row", marginTop: 25, width: "50%" }}>
            <ButtonGenericWhite
              title="Registrarse"
              onPress={handlePress}
              backgroundColor={color.primary}
              style={{ marginTop: 50 }}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  cont: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  box: {
    width: "65%",
  },
  borntitle: {
    width: "65%",
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 20,
    fontWeight: "bold",
  },
  imgcont: {
    borderRadius: 100,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
