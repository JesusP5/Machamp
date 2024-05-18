import React from "react";
import { Text, StyleSheet, Image, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../assets/Colors";
import Header from "../components/header";

function CompleteInfoPatient({ navigation, route }) {
  const { username, image } = route.params;
  return (
    <SafeAreaView>
      <Header
        onBack={() => navigation.goBack()}
        onSetting={() => navigation.navigate("EditProfile")}
      />
        <View style={styles.WhiteBox}>
            <Text style={styles.textIntro}> Hola {username}!</Text>
            <Text>Tu codigo QR</Text>
            <Text>Propociona este codigo a tu institución para tu registro</Text>
        </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

});
export default CompleteInfoPatient;
