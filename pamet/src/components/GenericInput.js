import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import Octicons from 'react-native-vector-icons/Octicons';

export default function GenericInput({ children, placeholder, label, icon, style, ...props }) {
  return (
    <View style={[styles.container, style]}>
      <TextInput 
        style={styles.input} 
        placeholder={placeholder} 
        {...props} 
      />
      {icon && <Octicons name={icon} size={24} color="black" style={styles.icon} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 1,
    borderColor: "#B1B1B1",
    borderRadius: 0,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 18,
  },
});