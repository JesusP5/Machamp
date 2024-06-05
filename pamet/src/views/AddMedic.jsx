import React, {useState} from "react";
import { Text, StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../assets/Colors";
import Header from "../components/header";
import GenericInput from "../components/GenericInput";

export default function AddPatient({ navigation, route }) {
  const user = route.params;
 

  console.log(user);
  return (
    <SafeAreaView style={styles.safearea}>
      <Header
        onBack={() => navigation.goBack()}
        onSetting={() => navigation.navigate("EditProfile", user)}
        isHome={true}
      />
      <View style={styles.container}>
        
          <View style={styles.formContainer}>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>
              Agregar nuevo registro
            </Text>
            <GenericInput placeholder="Nombre" value={user.name} />
            <GenericInput placeholder="Apellido" value={user.lastName} />
            <GenericInput
              placeholder="Especializacion"
              value={user.specialization}
            />
            <GenericInput placeholder="Departamento" value={user.department} />

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={{ color: "white", marginTop: 20 }}>Agregar</Text>
            </TouchableOpacity>
       
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: "center",
    justifyContent: "start",
    marginTop: 50,
  },
  addButton: {
    backgroundColor: color.primary,
    width: "80%",
    height: 60,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
    justifyContent: "start",
    paddingBottom: 10,
  },
  formContainer: {
    width: "80%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  addContainer: {
    marginTop: -50,
    alignItems: "center",
    justifyContent: "start",
    width: "85%",
    height: "75%",
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: "white",
    borderWidth: 1,
    padding: 20,
  },
});
