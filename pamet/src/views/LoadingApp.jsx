import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Image, Text} from 'react-native';

export default function LoadingApp({navigation}) {
    useEffect(() => {
        // Cambiar a la pantalla principal después de 2 segundos
        const timer = setTimeout(() => {
          navigation.replace('Welcome'); // Utiliza 'navigate' si prefieres permitir volver a la pantalla de carga
        }, 2000); // Ajusta el tiempo según necesites
    
        return () => clearTimeout(timer); // Limpieza al desmontar
      }, [navigation]);
    

    return (
        <View style={styles.container}>
            <Image source={require('../assets/LogoPamet.png')} style={styles.imageLogo}/>
            <Text style={styles.textLogo}>PAMET</Text>
            <ActivityIndicator size="large" color="#00B1FE" />
        </View>
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