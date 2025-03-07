import React from "react";
import { useRoute } from "@react-navigation/native";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Colors from "../assets/Colors";

export default function NavBar({ navigation, userData }) {
  const user = userData;
  const route = useRoute();
  const currentScreen = route.name;
  return (
    <View style={styles.navbar}>
      {(user.typeOfUser === "1" || user.typeOfUser === "2") && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("PersonaQR", user)}
          >
            <AntDesign
              name="qrcode"
              size={25}
              color={currentScreen === "PersonaQR" ? Colors.primary : "black"}
            />
          </TouchableOpacity>
        </View>
      )}
      {user.typeOfUser === "3" && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ScanDocQRCode", user)}
          >
            <Feather
              name="camera"
              size={25}
              color={
                currentScreen === "ScanDocQRCode" ? Colors.primary : "black"
              }
            />
          </TouchableOpacity>
        </View>
      )}
      {user.typeOfUser === "3" && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AdminGroups", user)}
          >
            <Feather
              name="home"
              size={25}
              color={
                currentScreen === "AdminGroups" ? Colors.primary : "black"
              }
            />
          </TouchableOpacity>
        </View>
      )}
      {user.typeOfUser === "2" && (
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Patient", user)}
          >
            <FontAwesome5
              name="user"
              size={25}
              color={currentScreen === "Patient" ? Colors.primary : "black"}
            />
          </TouchableOpacity>
        </View>
      )}
      {(user.typeOfUser === "2" ) && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ScanQRCode", user)}
          >
            <Feather
              name="camera"
              size={25}
              color={currentScreen === "ScanQRCode" ? Colors.primary : "black"}
            />
          </TouchableOpacity>
        </View>
      )}
      {/* boton para pantalla de pruebas */}
      {user.typeOfUser === "3" && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("PersonalAndPatients", user)}
          >
            <AntDesign
              name="edit"
              size={24}
              color={
                currentScreen === "PersonalAndPatients"
                  ? Colors.primary
                  : "black"
              }
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: 90,
    flexDirection: "row",
    justifyContent: "space-around", // Modificado aquí
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderTopColor: "#F0F0F0",
    borderTopWidth: 1,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  navBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
