import React from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import NavBar from "../components/navbar";
import ButtonGenericWhite from "../components/ButtonGenericWhite";
import MedicCard from "../components/medicCard";

export default function MedicScreen({ navigation }) {
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <Header
          onBack={() => navigation.goBack()}
          onSetting={() => navigation.navigate("EditProfile")}
          isHome={true}
        />
        <View style={styles.container}>
            <Text style={styles.containerTitle}>Medicos</Text>
            <View style={styles.content}>
                <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <MedicCard name={'Dr. Gregory House'} area={'Medical diagnostic'} mainArea={'infectious diseases and nephrology'}/>
                    <MedicCard name={'Dr.Gregory House'} area={'Medical diagnostic'} mainArea={'infectious diseases and nephrology'}/>
                    <MedicCard name={'Dr.Gregory House'} area={'Medical diagnostic'} mainArea={'infectious diseases and nephrology'}/>
                    <MedicCard name={'Dr.Gregory House'} area={'Medical diagnostic'} mainArea={'infectious diseases and nephrology'}/>
                    <MedicCard name={'Dr.Gregory House'} area={'Medical diagnostic'} mainArea={'infectious diseases and nephrology'}/>
                    <MedicCard name={'Dr.Gregory House'} area={'Medical diagnostic'} mainArea={'infectious diseases and nephrology'}/>
                    <MedicCard name={'Dr.Gregory House'} area={'Medical diagnostic'} mainArea={'infectious diseases and nephrology'}/>
                    <MedicCard name={'Dr.Gregory House'} area={'Medical diagnostic'} mainArea={'infectious diseases and nephrology'}/>
                    <MedicCard name={'Dr.Gregory House'} area={'Medical diagnostic'} mainArea={'infectious diseases and nephrology'}/>
                </ScrollView>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Agregar Medico</Text>
                </TouchableOpacity>
            </View>
        </View>
        <NavBar navigation={navigation} style={styles.navbar}/>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    containerTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 20,
    },
    content: {
        flex: 1,
        backgroundColor: 'white',
        paddingBottom: 110,
    },
    scrollView: {
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#008EDA',
        padding: 10,
        borderRadius: 50,
        marginTop: 10,
        width: 200,
        alignSelf: 'flex-end',
        marginRight: 20,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    navbar: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
});