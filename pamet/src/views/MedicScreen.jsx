import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet, Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import NavBar from "../components/navbar";
export default function MedicScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
    <Header
      onBack={() => navigation.goBack()}
      onSetting={() => navigation.navigate("EditProfile")}
      isHome={true}
    />
    <View style={styles.container}>
        <Text>
            Loading...
        </Text>
    </View>
    <NavBar navigation={navigation} style={styles.navbar}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: "#FFF",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
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
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
    },
    text: {
        fontSize: 20,
        color: "#000",
    },
});
