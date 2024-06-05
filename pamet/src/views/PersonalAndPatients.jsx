import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/header";
import SearchBar from "../components/SearchBar";
import color from "../assets/Colors";
import MedicCard from "../components/medicCard";
import { Ionicons } from "@expo/vector-icons";
import doctors from "../models/doctors";
import pacientes from "../models/pacientes";
import Navbar from "../components/navbar";


export default function PersonalAndPatients({ navigation, route }) {
  const user = route.params;
  const [filterText, setFilterText] = useState("Medicos");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMedics, setSelectedMedics] = useState([]);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        onBack={() => navigation.goBack()}
        onSetting={() => navigation.navigate("EditProfile", user)}
        isHome={true}
      />
      <View style={styles.SearchBarContainer}>
        <SearchBar />
      </View>
      <View style={styles.filterBox}>
        <TouchableOpacity
          style={[
            styles.medicButton,
            {
              backgroundColor:
                filterText === "Medicos" ? color.primary : "white",
              borderColor: filterText === "Medicos" ? color.primary : "white",
            },
          ]}
          onPress={() => setFilterText("Medicos")}
        >
          <Text
            style={[
              styles.filterText,
              { color: filterText === "Medicos" ? "white" : "black" },
            ]}
          >
            Medicos
          </Text>
          <Ionicons
            name="person"
            size={24}
            color={filterText === "Medicos" ? "white" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.pacientButton,
            {
              backgroundColor:
                filterText === "Pacientes" ? color.primary : "white",
              borderColor: filterText === "Pacientes" ? color.primary : "white",
            },
          ]}
          onPress={() => setFilterText("Pacientes")}
        >
          <Text
            style={[
              styles.filterText,
              { color: filterText === "Pacientes" ? "white" : "black" },
            ]}
          >
            Pacientes
          </Text>
          <Ionicons
            name="people"
            size={24}
            color={filterText === "Pacientes" ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.Content}>
        <View style={styles.MedicBox}>
          <Text style={styles.MedicData}>
            {filterText == "Medicos" ? "Personal Medico" : "Pacientes"}
          </Text>
          <ScrollView
            style={styles.cardsBox}
            showsVerticalScrollIndicator={false}
          >
            {filterText === "Medicos"
              ? doctors.map((doctor, index) => (
                  <MedicCard
                    key={index}
                    name={doctor.name}
                    area={doctor.Department}
                    mainArea={doctor.Specialization}
                    photo={doctor.ProfilePicture}
                    //onPress={() => handleSelectMedics(doctor)}
                  />
                ))
              : filterText === "Pacientes"
              ? pacientes.map((patient, index) => (
              
                  <MedicCard
                    key={index}
                    area={patient.observations}
                    name={(patient.name)+" "+(patient.firstName)+" "+(patient.lastName)}
                 
                  
                    //onPress={() => handleSelectPatients(patient)}
                  />
                ))
              : null}
          </ScrollView>
          <View style={styles.buttonBox}>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>{navigation.navigate("AddMedic",user)}}
            >
              <Text style={styles.buttonText}>Agregar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
     
      <Navbar navigation={navigation} styles={styles.navBar} userData={user} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SearchBarContainer: {
    marginTop: 40,
    marginHorizontal: 30,
  },
  buttonBox: {
    alignItems: "flex-end",
    padding: 20,
  },
  filterBox: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "semibold",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    color: "white",
    textAlign: "start",
    marginHorizontal: 30,
  },
  medicButton: {
    flexDirection: "row",
    alignItems: "center",
    height: 70,
    width: "50%",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    borderWidth: 1,

    marginTop: 10,
    padding: 10,
  },
  pacientButton: {
    flexDirection: "row",
    alignItems: "center",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    marginLeft: 0,
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    height: 70,
    width: "50%",
  },
  filterText: {
    fontSize: 20,
    fontWeight: "semibold",
    color: "white",
  },
  button: {
    backgroundColor: color.primary,
    padding: 10,
    borderRadius: 50,
    width: 160,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "semibold",
  },
  cardsBox: {
    marginHorizontal: 20,
  },
  Content: {
    marginHorizontal: 30,
    height: "40%",
  },
  MedicBox: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 25,
  },
  MedicData: {
    fontSize: 20,
    fontWeight: "semibold",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    color: "white",
    backgroundColor: color.primary,
    textAlign: "start",
  },
});
