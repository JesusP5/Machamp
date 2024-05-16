import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
export default function SignUp() {
    return (
        <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.container}>
        <Text style={styles.title}>Add your personal data</Text>
        <Image source={require("../assets/LogoPamet.png")} style={styles.logo} />
        <TextInput style={styles.input} placeholder="First Name" />
        <TextInput style={styles.input} placeholder="Last Name" />
        <Text style={styles.title}>Select your born date</Text>
        </View>
        <Button title="Register"/>
        </SafeAreaView>
    );
    }

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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