import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import Header from "../components/header";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../assets/Colors";
import GenericInput from "../components/GenericInput";
import ButtonGenericBlue from "../components/ButtonGenericBlue";

function EditProfile({ navigation, route }) {
  const user = route.params;
  const userData = {
    UserName: "Sergio",
    EmailAdress: "sergPR@pamet.com",
    FirstName: "Pineda",
    LastName: "Rodiño",
    Password: "123",
  };

  const ShadowLine = () => {
    const styles = StyleSheet.create({
      shadowLine: {
        width: "100%",
        height: 1,
        backgroundColor: "black",
        opacity: 0.1,
        marginBottom: 20,
      },
    });
    return <View style={styles.shadowLine} />;
  };
  return (
    <SafeAreaView style={styles.safearea}>
      <Header
        onBack={() => navigation.goBack()}
        onSetting={() => navigation.navigate("EditProfile")}
      />
      <View style={styles.container}>
        <View style={styles.formHeader}>
          <Text style={styles.formTitle}>Informacion Personal</Text>
          <ShadowLine />
        </View>
        <ScrollView
          style={styles.ScrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.generalInfo}>
            <View style={styles.usernameView}>
              <Text style={styles.UsernameText}>Hola {user.name}!</Text>
            </View>
            <View style={styles.inputsView}>
              <GenericInput
                placeholder={user.email}
                icon="pencil"
                style={styles.input}
              />
              <GenericInput
                placeholder={user.firstName}
                icon="pencil"
                style={styles.input}
              />
              <GenericInput
                placeholder={user.lastName}
                icon="pencil"
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.changePasswordSection}>
            <View style={styles.changePasswordView}>
              <Text style={styles.titleText}>Cambiar contraseña</Text>
            </View>
            <View style={styles.changePasswordForm}>
              <GenericInput
                placeholder="Contraseña actual"
                icon="lock"
                style={styles.input}
              />
              <View style={styles.passwordRestrictionsContainer}>
                <Text style={styles.restrictionTitle}>
                  La contraseña debe cumplir los siguientes requisitos:
                </Text>
                <View style={styles.passwordRestrictions}>
                  <Text style={styles.passwordRestrictionsText}>
                    • Al menos 8 caracteres
                  </Text>
                  <Text style={styles.passwordRestrictionsText}>
                    • Al menos 1 número
                  </Text>
                  <Text style={styles.passwordRestrictionsText}>
                    • Al menos 1 caracter especial
                  </Text>
                  <Text style={styles.passwordRestrictionsText}>
                    • Al menos 1 mayúscula
                  </Text>
                  <Text style={styles.passwordRestrictionsText}>
                    • Al menos 1 minúscula
                  </Text>
                </View>
              </View>
              <GenericInput
                placeholder="Contraeña nueva"
                icon="lock"
                style={styles.input}
              />
              <GenericInput
                placeholder="Confirmar contraseña"
                icon="lock"
                style={styles.input}
              />
            </View>
            <ButtonGenericBlue
              title="Cambiar contraseña"
              backgroundColor={"blue"}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    padding: 0,
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    margin: 25,
    padding: 20,
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "white",

    borderRadius: 15,
    // agregar sombra al contenedor
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 5,
  },
  ScrollView: {
    width: "100%",
  },
  formHeader: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  generalInfo: {
    width: "100%",
    marginBottom: 20,
  },
  usernameView: {
    width: "100%",
    marginBottom: 10,
  },
  UsernameText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  inputsView: {
    width: "100%",
  },
  input: {
    marginBottom: 10,
  },
  changePasswordSection: {
    width: "100%",
    marginBottom: 20,
  },
  changePasswordView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#024F78",
  },
  changePasswordForm: {
    width: "100%",
  },
  passwordRestrictionsContainer: {
    width: "100%",
    marginBottom: 10,
  },
  restrictionTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  passwordRestrictions: {
    width: "100%",
  },
  passwordRestrictionsText: {
    fontSize: 14,
    fontWeight: "normal",
  },
});

export default EditProfile;
