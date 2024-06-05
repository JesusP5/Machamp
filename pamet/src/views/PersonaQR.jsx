import React from "react";
import { Text, StyleSheet, Image, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../assets/Colors";
import Header from "../components/header";
import Navbar from "../components/navbar";
import QRCode from 'react-native-qrcode-svg'; 

function PersonalQR({ navigation, route }) {
  const user = route.params;

  return (
    <SafeAreaView style={styles.safearea}>
      <Header
        onBack={() => navigation.goBack()}
        onSetting={() => navigation.navigate("EditProfile",user)}
        isHome={true}
      />
      <View style={styles.container}>
        <View style={styles.qrContainer}>
          <Text style={styles.helloText}> Hola {user.name}!</Text>
  
          <QRCode
            value={user.id.toString()}
            size={200}
          />
          <Text style={styles.yourOwnQR}>Tu codigo QR</Text>
          <Text style={styles.indicationsText}>
            { (user.typeOfUser === "1" | user.typeOfUser === "2")?
            "Presenta este codigo QR para ser agregado a una institucion."
            :"Presenta este codigo QR para identificarte."}
            </Text>
        </View>
      </View>
      <Navbar navigation={navigation} styles={styles.navBar} userData={user}/>
    </SafeAreaView>
  );
}

styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: color.white,
  },
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: "center",
    justifyContent: "center",
  },
  qrContainer: {
    marginTop: -50,
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
    height: "75%",
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: "white",
    borderWidth: 1,
    padding: 20,
  },
  helloText: {
    fontSize: 24,
    color: color.black,
    fontWeight: "bold",
  },
  yourOwnQR: {
    fontSize: 20,
    color: color.black,
    fontWeight: "bold",
  },
  indicationsText: {
    fontSize: 18,
    width: "80%",
    textAlign: "center",
    color: color.black,
  },
  navBar: {
    position: "absolute",
    bottom: 0,
  },
});
export default PersonalQR;
