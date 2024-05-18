import React from "react";
import { Text, StyleSheet, Image, View, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../assets/Colors";


function PersonalQR({ navigation }) {
  return (
    <SafeAreaView style={styles.safearea}>
        <View style={styles.BlueTopBackground} ></View>
        <View style={styles.WhiteBox}>
            <Text style={styles.textIntro}> Hola Nombre!</Text>
            <Text>Tu codigo QR</Text>
            <Text>Propociona este codigo a tu institución para tu registro</Text>
        </View>
        <Button title="continue" onPress={()=>navigation.navigate('Patient')}></Button>
    </SafeAreaView>
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
    BlueTopBackground: {
        backgroundColor: color.primary,
        position: 'absolute',
        width: "126%",
        height: "25%",
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#008EDA",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 3.84,
        elevation: 5,
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
        marginTop: 20,
        fontSize: 16,
        marginBottom: 60,
        width: '85%',
        color: '#2e2e2e',
        textAlign: 'center',
        fontWeight: 'light'
        
    },

    });
export default PersonalQR;