import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function NavBar({navigation}) {

    return (
        <View style={styles.navbar}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('QRCode')}>
                    <AntDesign name="qrcode" size={25}/>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Patient')}>
                    <FontAwesome5 name="user" size={25}/>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('ScanQRCode')}>
                    <Feather name="camera" size={25} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    navbar: {
        width: '100%',
        height: 90,
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
        borderTopColor: '#F0F0F0',
        borderTopWidth: 1,
    },
    buttonContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 38,
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
    },
});