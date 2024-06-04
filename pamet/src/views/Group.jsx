import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../assets/Colors";
import Header from "../components/header";
import MedicCard from "../components/medicCard";
import pacientes from "../models/pacientes";


export default function Group({ navigation, route}) {
  const { user, group } = route.params;
    const handlePatient = (doctor) => {
        const user ={
            profileImage: doctor.ProfilePicture,
            name: doctor.name,
            firstName: " ",
            lastName: " ",
            id: doctor.id,
            pacients:[pacientes[0],pacientes[2],pacientes[1]]
        }
        navigation.navigate("Patient",user);
    }
  console.log(group);
  return (
    <SafeAreaView style={styles.safearea}>
      <Header
        onBack={() => navigation.goBack()}
        onSetting={() => navigation.navigate("EditProfile", user)}
        isHome={true}
      />
      <View style={styles.container}>
        <View style={styles.qrContainer}>
          <Text style={styles.helloText}> Centro medico UAQ</Text>
          <Image
              source={require("../assets/img/UAQ.png")}
              style={{ width: 125, height: 125, marginTop: 20}}
              resizeMode="contain"
              
            />
            <ScrollView>
            {group.doctorInGroup.map((doctor, index) => (
            <MedicCard
              key={index}
              name={doctor.name}
              area={doctor.Department}
              mainArea={doctor.Specialization}
              photo={doctor.ProfilePicture}
                onPress={()=>{handlePatient(doctor)}}
              />
          ))}
</ScrollView>
        </View>
      </View>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: color.white,
  },
  container: {
    flex: 1,
    backgroundColor: color.white,
    alignItems: "center",
    justifyContent: "center",
  },
  groupContain: {
    marginTop: 20,
    marginHorizontal:20,
    flexDirection: "row",
  },
  leftButton:{
    alignItems: "center",
    justifyContent: "center",
    borderColor: color.black,
    borderWidth: 1,
    borderRightWidth: 0,
    borderTopLeftRadius:25,
    borderBottomLeftRadius:25,
    padding: 15,
    width: "65%",
    height: 70,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: "white",
    borderWidth: 1,
    padding: 20,
    
  },
  rightButton:{
    alignItems: "center",
    justifyContent: "center",
    borderColor: color.primary,
    backgroundColor: color.primary,
    borderWidth: 1,
    borderTopRightRadius:25,
    borderBottomRightRadius:25,
    width: "30%",
    height: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: color.primary,
    borderWidth: 1,
    padding: 20,
  },

  qrContainer: {
    marginTop: -50,
    alignItems: "center",
    justifyContent: "start",
    width: "85%",
    height: "75%",
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderColor: "white",
    borderWidth: 1,
    padding: 20,
  },
  helloText: {
    fontSize: 24,
    color: color.black,
    fontWeight: "bold",
  },
  indicationsText: {
    fontSize: 18,
    width: "80%",
    textAlign: "center",
    color: color.black,
  },
  navBar: {
    position: "absolute",
    bottom: 0,
  },
});
