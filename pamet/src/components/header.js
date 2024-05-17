import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons'; 

export default function Header({onBack, onSetting}) {
    return (
        <View style={styles.header}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onBack}>
                    <Entypo name="chevron-left" size={28} color="black" />
                </TouchableOpacity>
            </View>
            <Text style={styles.headerText}>PAMET</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={onSetting}>
                    <FontAwesome name="cog" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -5,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
    },
    buttonContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 38,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'normal',
        textAlign: 'center',
    },
});