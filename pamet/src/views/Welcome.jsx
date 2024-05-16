import React,{useEffect} from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import ButtonGenericBlue from '../components/ButtonGenericBlue';
import ButtonGenericWhite from '../components/ButtonGenericWhite';
import { SafeAreaView } from "react-native-safe-area-context";
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
      <Text style={[{fontWeight: 'bold', fontSize: 24}]}>Bienvenido a Pamet</Text>
      <Text style={styles.textIntro}>La mejor aplicacion para llevar tu registro medico desde un solo lugar. Sientete seguro de tener tus datos con nosotros y deja que nos encargemos 
        con las situaciones medicas.</Text>
      <View style={{width:'70%'}}>
      <ButtonGenericBlue title="Iniciar Sesion con tu cuenta" onPress={Login} backgroundColor={'white'} />
      </View>
      <Text style={styles.textQuestion}>¿No tienes una cuenta?</Text>
      <View style={{width:'70%'}}>
      <ButtonGenericWhite title="Registrarse" onPress={SignUp} backgroundColor={color.primary} color={'white'} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    padding: 40,
    flex: 1, 
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'white'
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
    fontWeight: 'semibold'
  }
  
})

export default Welcome;
