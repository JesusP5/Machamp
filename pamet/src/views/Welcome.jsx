import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, Image } from 'react-native';
import ButtonGenericBlue from '../components/ButtonGenericWhite';
import ButtonGenericWhite from '../components/ButtonGenericBlue';
import color from '../assets/Colors';


function Welcome({ navigation }) {
  const Login = () => {
    navigation.navigate('Login');
  }
  const SignUp = () => {
    navigation.navigate('SignUp');
  }
  return (
    <SafeAreaView style={styles.safearea}>
      <Image source={require('../assets/LogoPamet.png')} />
      <Text style={[{fontWeight: 'bold', fontSize: 24}]}>¡Bienvenido a PAMET!</Text>
      <Text style={styles.textIntro}>La mejor aplicacion para llevar tu registro medico desde un solo lugar. Sientete seguro de tener tus datos con nosotros y deja que nos encargemos 
        con las situaciones medicas.</Text>
      <ButtonGenericBlue title="Log in with your account" onPress={Login} backgroundColor={'white'} />
      <Text style={styles.textQuestion}>¿No tienes una cuenta?</Text>
      <ButtonGenericWhite title="Sign Up" onPress={SignUp} backgroundColor={color.primary} color={'white'} />
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
