import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import styles from '../assets/styles';

export default function GenericInput({children, label, style, ...props}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
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
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    width: 300,
    backgroundColor: '#FFF',
    borderColor: '#B1B1B1',
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
});