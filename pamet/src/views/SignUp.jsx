import React from "react";
import { View, Text, TextInput, Button, StyleSheet, StatusBar, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
    return (
        <SafeAreaView>
        <Text style={styles.title}>Add your personal data</Text>
        <Image source={require("../assets/LogoPamet.png")} style={styles.logo} />
        <TextInput style={styles.input} placeholder="First Name" />
        <TextInput style={styles.input} placeholder="Last Name" />
        <Text style={styles.title}>Select your born date</Text>

        <Button title="Register"/>
        <StatusBar style="auto" />
        </SafeAreaView>
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