import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Image, Text} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoadingApp({navigation}) {
    useEffect(() => {
        // Cambiar a la pantalla principal después de 2 segundos
        const timer = setTimeout(() => {
          navigation.replace('Welcome'); // Utiliza 'navigate' si prefieres permitir volver a la pantalla de carga
        }, 2000); // Ajusta el tiempo según necesites
    
        return () => clearTimeout(timer); // Limpieza al desmontar
      }, [navigation]);
    

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../assets/LogoPamet.png')} style={styles.imageLogo}/>
            <Text style={styles.textLogo}>PAMET</Text>
            <ActivityIndicator size="large" color="#00B1FE" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageLogo: {
        width: 100,
        height: 100,
    },
    textLogo: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});