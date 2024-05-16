import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default function Header(){
    return(
        <View style={styles.shadow}>
            <View style={styles.header}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Entypo name="chevron-left" size={28} color="black" />                
                    </TouchableOpacity>
                </View>
                <Text style={styles.headerText}>PAMET</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <FontAwesome name="cog" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    shadow: {
        padding: 2,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,  
            height: -5,  
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,    
        elevation: 5,        
    },
    header: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonImage: {
        width: 30,
        height: 30,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'regular',
        textAlign: 'center',
    },
});