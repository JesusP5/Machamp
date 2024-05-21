import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../assets/Colors";
import Header from "../components/header";

function calculateAge(bornDate) {
  const birthDate = new Date(bornDate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }

  return age;
}

function CompleteInfoPatient({ navigation, route }) {
  const patient = route.params.patient;
  const defaultImage = require("../assets/img/UserPicture.png");
  const { id, name, firstName, lastName, phone, dischargeDate, curp, gender, lastRevision, bornDate, observations, medicines, medicalHistory } = patient;
  return (
    <SafeAreaView>
      <Header
        onBack={() => navigation.goBack()}
        onSetting={() => navigation.navigate("EditProfile")}
      />
      <View style={styles.top} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.head} />
        <Image source={defaultImage} style={styles.profile} />
        <Text style={styles.name}>{firstName} {lastName}, {name}</Text>
        <View style={styles.personalBox}>
          <Text style={styles.personalData}>Datos Personales</Text>
          <View style={styles.personalInfo}>
            <Text>Expediente: {id}</Text>
            <Text>Edad: {calculateAge(bornDate)}</Text>
            <Text>Genero: {gender}</Text>
            <Text>Telefono: {phone}</Text>
            <Text>Fecha de alta: {dischargeDate}</Text>
            <Text>Curp: {curp}</Text>
          </View>
        </View>
        <View style={styles.medicBox}>
          <Text style={styles.medicData}>Estado Medico</Text>
          <View style={styles.personalInfo}>
            <Text>Padicimiento: {observations}</Text>
            {medicines.map((medicine, index) => (
              <View>
                <Text>Medicamento: {medicine.name}</Text>
                <Text>Dosis: {medicine.dose}</Text>
              </View>
              ))}
          </View>
        </View>
        <View style={styles.itineraryBox}>
          <Text style={styles.itineraryData}>Itinerario</Text>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text>Hora</Text>
              <Text></Text>
              <Text>9:00</Text>
              <Text>14:00</Text>
              <Text>19:00</Text>
              <Text>22:00</Text>
            </View>
            <View style={styles.column}>
              <Text>Medicamento</Text>
              <Text></Text>
              <Text>Metmorfina</Text>
              <Text>Metmorfina</Text>
              <Text>Glibenclamida</Text>
              <Text>Insulina</Text>
            </View>
            <View style={styles.column}>
              <Text>Observacion</Text>
              <Text></Text>
              <Text>Suministrado</Text>
              <Text>Suministrado</Text>
              <Text>No Suministrado</Text>
              <Text>Suministrado</Text>
            </View>
          </View>
        </View>
        <View style={styles.nurseBox}>
          <Text style={styles.nurseData}>Personal Encargado</Text>
          <ScrollView>
            <View style={styles.nurseInfo}>
              <View style={styles.nurseCard}>
                <View style={styles.nurseLeftInfo}>
                  <Text>Nombre:</Text>
                  <Text>Edad:</Text>
                  <Text>Genero:</Text>
                </View>
                <View style={styles.nurseImage}>
                  <Image source={defaultImage} style={styles.nursePic} />
                </View>
              </View>
              <View style={styles.nurseCard}>
                <View style={styles.nurseLeftInfo}>
                  <Text>Nombre:</Text>
                  <Text>Edad:</Text>
                  <Text>Genero:</Text>
                </View>
                <View style={styles.nurseImage}>
                  <Image source={defaultImage} style={styles.nursePic} />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.historyBox}>
          <Text style={styles.historyData}>Historial Clinico</Text>
          <View style={styles.historyInfo}>
            <Text style={styles.historyText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit
            </Text>
          </View>
        </View>
        <View />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  head: {
    height: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  profile: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: "center",
    marginBottom: 10,
  },
  scrollView: {
    marginHorizontal: "10%",
    marginBottom: 100,
  },
  personalBox: {
    width: "100%",

    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 10,
  },
  personalData: {
    fontSize: 20,
    fontWeight: "semibold",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    color: "white",
    backgroundColor: color.primary,
    textAlign: "start",
  },
  personalInfo: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    overflow: "hidden",
  },
  medicBox: {
    width: "100%",

    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 25,
  },
  medicData: {
    fontSize: 20,
    fontWeight: "semibold",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    color: "white",
    backgroundColor: color.primary,
    textAlign: "start",
  },
  itineraryBox: {
    width: "100%",

    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 25,
  },
  itineraryData: {
    fontSize: 20,
    fontWeight: "semibold",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    color: "white",
    backgroundColor: color.primary,
    textAlign: "start",
  },
  row: {
    flexDirection: "row",
    marginLeft: -25,
  },
  column: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  nurseBox: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 25,
  },
  nurseData: {
    fontSize: 20,
    fontWeight: "semibold",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    color: "white",
    backgroundColor: color.primary,
    textAlign: "start",
  },
  nurseInfo: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  nurseCard: {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "center",
    borderLeftWidth: 5,
    margin: 0,
    paddingLeft: 10,
    paddingTop: 10,
    borderLeftColor: color.primary,
    overflow: "hidden",
  },
  nurseLeftInfo: {
    flex: 1,
  },
  nurseImage: {
    flex: 1,
  },
  nursePic: {
    width: 75,
    height: 75,
    borderRadius: 15,
    alignSelf: "center",
    marginBottom: 10,
  },
  navBar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  top: {
    flex: 1,
    marginTop: 20,
    width: "90%",
    justifyContent: "center",
    alignSelf: "center",
  },
  historyBox: {
    width: "100%",

    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 10,
  },
  historyData: {
    fontSize: 20,
    fontWeight: "semibold",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    color: "white",
    backgroundColor: color.primary,
    textAlign: "start",
  },
  historyInfo: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default CompleteInfoPatient;
