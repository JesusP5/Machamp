import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const defaultImage = require('../assets/img/dr_house2.jpg'); // Asegúrate de cambiar esto a la ruta de tu imagen predeterminada

export default function MedicCard({name, area, mainArea, photo}) {
  return (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <Text style={styles.containerTitle}>{name}</Text>      
            <Text style={styles.containerSubtitle}>{area}</Text>
            <Text style={styles.containerSubtitle}>{mainArea}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver perfil</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.rightContainer}>
            <Image source={photo ? {uri:photo} : defaultImage} style={styles.image} />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 120,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 10,
        padding: 15,
        paddingRight: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 5,
        borderColor: 'gray',
        borderWidth: 0,
        marginHorizontal:0,
    },
    button: {
        backgroundColor: '#008EDA',
        padding: 5,
        borderRadius: 50,
        marginTop: 10,
        width: 100,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    leftContainer: {
        width: '70%',
    },
    rightContainer: {
        width: '30%',
    },
    containerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    containerSubtitle: {
        fontSize: 14,
        color: 'gray',
    },
});