import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../components/header";
import NavBar from "../components/navbar";

function ScanQRCode({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
        <Header onBack={()=>navigation.goBack()} onSetting={()=>navigation.navigate('EditProfile')}/>
        <View style={styles.container}>
            <Text>ScanQRCode</Text>
        </View>
        <NavBar navigation={navigation}/>
    </SafeAreaView>
  );
}
styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "#FFF",
        flex: 1,
    },
    container: {
        backgroundColor: "#FFF",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
export default ScanQRCode;
