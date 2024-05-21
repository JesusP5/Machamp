import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";

export default function Header({ onBack, onSetting, isHome = false }) {
  if (isHome === true) {
    return (
      <View style={styles.header}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onBack}>
            <Entypo name="chevron-left" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>PAMET</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onSetting}>
            <FontAwesome name="cog" size={25} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else if (isHome === false) {
    return (
      <View style={styles.header}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onBack}>
            <Entypo name="chevron-left" size={25} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.headerText}>PAMET</Text>
        <View style={styles.ImageContainer}>
          <Image
            source={require("../assets/LogoPamet.png")}
            style={styles.image}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    borderBottomColor: "#F0F0F0",
    borderBottomWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  image: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  buttonContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#F0F0F0",
    justifyContent: "center",
    alignItems: "center",
  },
  ImageContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: 38,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "normal",
    textAlign: "center",
  },
});
