import React from "react";
import { Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../assets/Colors";
import Header from "../components/header";
import NavBar from "../components/navbar";
import { Octicons } from "@expo/vector-icons";

function ScanQRCode({ navigation, route}) {
  const user = route.params;
  return (
    <SafeAreaView style={styles.safearea}>
      <Header
        onBack={() => navigation.goBack()}
        onSetting={() => navigation.navigate("EditProfile",user)}
        isHome={true}
      />
      <View style={styles.container}>
        <View style={styles.QRCard}>
          <Text style={styles.titleText}>Scan QR code</Text>
          <Text style={styles.indicationsText}>
            Here you can scan patient´s QR code using your camera to assign them
            to your care.
          </Text>
          <Image
            source={require("../assets/img/ScanQRImage.png")}
            style={styles.image}
          />
          <TouchableOpacity style={styles.scanQRButton}>
            <Text style={styles.buttonText}>Scan QR code</Text>
            <Octicons name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <NavBar navigation={navigation} style={styles.navBar} userData={user}/>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safearea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  QRCard: {
    width: "85%",
    height: "75%",
    marginTop: -50,
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
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 24,
    color: color.black,
    fontWeight: "bold",
  },
  indicationsText: {
    fontSize: 16,
    color: color.black,
    marginTop: 10,
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 35,
  },
  scanQRButton: {
    backgroundColor: "#008DD9",
    width: 200,
    height: 55,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default ScanQRCode;
