import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

export default function GenericInput({ children, label, style, ...props }) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  label: {
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 1,
    width: 300,
    backgroundColor: "#FFF",
    borderColor: "#B1B1B1",
    borderRadius: 0,
    padding: 10,
    fontSize: 18,
  },
});
