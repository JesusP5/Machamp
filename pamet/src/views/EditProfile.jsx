import React, { useState } from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import Header from "../components/header";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../assets/Colors";
import GenericInput from "../components/GenericInput";
import ButtonGenericBlue from "../components/ButtonGenericBlue";

function EditProfile({ navigation }) {
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
          <Text style={styles.formTitle}>My personal info</Text>
          <ShadowLine />
        </View>
        <ScrollView
          style={styles.ScrollView}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.generalInfo}>
            <View style={styles.usernameView}>
              <Text style={styles.UsernameText}>Hi {userData.UserName}!</Text>
            </View>
            <View style={styles.inputsView}>
              <GenericInput
                placeholder={userData.EmailAdress}
                icon="pencil"
                style={styles.input}
              />
              <GenericInput
                placeholder={userData.FirstName}
                icon="pencil"
                style={styles.input}
              />
              <GenericInput
                placeholder={userData.LastName}
                icon="pencil"
                style={styles.input}
              />
            </View>
          </View>
          <View style={styles.changePasswordSection}>
            <View style={styles.changePasswordView}>
              <Text style={styles.titleText}>Change your password</Text>
            </View>
            <View style={styles.changePasswordForm}>
              <GenericInput
                placeholder="Current password"
                icon="lock"
                style={styles.input}
              />
              <View style={styles.passwordRestrictionsContainer}>
                <Text style={styles.restrictionTitle}>
                  Please enter a password that meets the following criteria:
                </Text>
                <View style={styles.passwordRestrictions}>
                  <Text style={styles.passwordRestrictionsText}>
                    • At least 8 characters
                  </Text>
                  <Text style={styles.passwordRestrictionsText}>
                    • At least 1 number
                  </Text>
                  <Text style={styles.passwordRestrictionsText}>
                    • At least 1 special character
                  </Text>
                  <Text style={styles.passwordRestrictionsText}>
                    • At least 1 uppercase letter
                  </Text>
                  <Text style={styles.passwordRestrictionsText}>
                    • At least 1 lowercase letter
                  </Text>
                </View>
              </View>
              <GenericInput
                placeholder="New Password"
                icon="lock"
                style={styles.input}
              />
              <GenericInput
                placeholder="Confirm Password"
                icon="lock"
                style={styles.input}
              />
            </View>
            <ButtonGenericBlue
              title="Change password"
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
