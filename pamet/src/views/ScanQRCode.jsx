import React from "react";
import { Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../assets/Colors";
import Header from "../components/header";
import NavBar from "../components/navbar";

function ScanQRCode({ navigation }) {
  return (
    <>
      <Header onBack={()=>navigation.goBack()} onSetting={()=>navigation.navigate('')}/>
      <SafeAreaView style={styles.safearea}>
          <View style={styles.WhiteBox}>
              <Text style={styles.textIntro}> <Text style={styles.bold}>Scan QR code</Text>{"\n"}<Text>Here you can scan patient´s QR code using your camera to assign them to your care.</Text></Text>
              <Image source={require('./assets/qr.png')} style={styles.image} />
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Scan QR code</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>
    </>
  );
}
styles = StyleSheet.create({
    safearea: {
        padding: 40,
        flex: 1, 
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'white'
    },
    WhiteBox: {
        backgroundColor: 'white',
        width: '100%',
        marginTop: '0%',
        height: '90%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    textIntro: {
        marginTop: 60,
        fontSize: 16,
        marginBottom: 20,
        width: '85%',
        color: '#2e2e2e',
        textAlign: 'center',
        fontWeight: 'light'
    },
    bold: {
        fontWeight: 'bold'
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginTop: 30,
    },
    button: {
        backgroundColor: color.primary,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 20,
        marginTop: 50,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    }
});

export default ScanQRCode;
