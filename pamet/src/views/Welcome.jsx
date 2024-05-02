import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, Image } from 'react-native';
import ButtonGenericBlue from '../components/ButtonGenericBlue';
import ButtonGenericWhite from '../components/ButtonGenericWhite';
import color from '../assets/Colors';
import Card from '../components/InstituitionCard';
function Welcome({ navigation }) {
  const handlePress = () => {
    console.log('Bien')
  }
  return (
    <SafeAreaView style={styles.safearea}>
      <Image source={require('../assets/LogoPamet.png')} />
      <Text style={[{fontWeight: 'bold', fontSize: 24}]}>¡Bienvenido a PAMET!</Text>
      <Text style={styles.textIntro}>La mejor aplicacion para llevar tu registro medico desde un solo lugar. Sientete seguro de tener tus datos con nosotros y deja que nos encargemos 
        con las situaciones medicas.</Text>
      <ButtonGenericBlue title="Log in with your account" onPress={handlePress} backgroundColor={'white'} />
      <Text style={styles.textQuestion}>¿No tienes una cuenta?</Text>
      <ButtonGenericWhite title="Sign Up" onPress={handlePress} backgroundColor={color.primary} color={'white'} />
      <Card
        HospitalName="Centro médico COSCAMI"
        HospitalId="3D6J09"
        HospitalAddress="Av Río Moctezuma 176, San Cayetano, 76807 San Juan del Río, Qro."
        HospitalPhone="427 274 1481"
        Doctor="Dr. Alonso Gutierrez Jimenez"
        GroupSize="192"
        HospitalPicture={require('../assets/img/HospitalPicture.png')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1, 
    alignItems: 'center',
    textAlign: 'center'
  },
  textIntro: {
    marginTop: 20,
    fontSize: 16,
    marginBottom: 60,
    width: '85%',
    textAlign: 'center'
    
  },
  textQuestion: {
    marginTop: 20,
    fontSize: 16,
    marginBottom: 20,
    width: '80%',
    textAlign: 'center',
    fontWeight: 'bold'
  }
  
})

export default Welcome;
