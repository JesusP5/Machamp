import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import color from '../assets/Colors';

const ButtonGenericBlue = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: color.primary
    },
    buttonText: {
        color: color.primary,
        fontSize: 16,
        fontWeight: 'normal',
    },
});

export default ButtonGenericBlue;