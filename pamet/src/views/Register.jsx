import React from "react";
import { View, Text, TextInput, Button, StyleSheet, StatusBar, Image} from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Register() {
    return (
        <SafeAreaProvider>
        <Text style={styles.title}>Add your personal data</Text>
        <Image source={require("../assets/LogoPamet.png")} style={styles.logo} />
        <TextInput style={styles.input} placeholder="First Name" />
        <TextInput style={styles.input} placeholder="Last Name" />
        <Text style={styles.title}>Select your born date</Text>

        <Button title="Register"/>
        <StatusBar style="auto" />
        </SafeAreaProvider>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
    },
    input: {
        width: "80%",
        padding: 8,
        marginBottom: 8,
        borderWidth: 1,
        borderColor: "#ccc",
    },
});