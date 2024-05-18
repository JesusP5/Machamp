import React, { useState } from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View, ScrollView, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from '@expo/vector-icons';

import Header from "../components/header";
import NavBar from "../components/navbar";
import PatientCard from "../components/PatientCard";

import usuarios from "../models/usuarios";

function Patient({ navigation }) {
    const user = usuarios[0];
    const [patients, setPatients] = useState(user.pacients);
    const [modalVisible, setModalVisible] = useState(false);

    const sortPatients = (criteria) => {
        let sortedPatients = [...patients];
        switch (criteria) {
            case "alphabeticalAsc":
                sortedPatients.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "alphabeticalDesc":
                sortedPatients.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "idAsc":
                sortedPatients.sort((a, b) => a.id - b.id);
                break;
            case "idDesc":
                sortedPatients.sort((a, b) => b.id - a.id);
                break;
            case "ageAsc":
                sortedPatients.sort((a, b) => new Date(a.bornDate) - new Date(b.bornDate));
                break;
            case "ageDesc":
                sortedPatients.sort((a, b) => new Date(b.bornDate) - new Date(a.bornDate));
                break;
            case "priority":
                sortedPatients.sort((a, b) => a.priority - b.priority);
                break;
            default:
                break;
        }
        setPatients(sortedPatients);
        setModalVisible(false); // Close the modal after sorting
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={styles.modalButton} onPress={() => sortPatients("alphabeticalAsc")}>
                            <Text style={styles.modalText}>Orden alfabético ascendente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => sortPatients("alphabeticalDesc")}>
                            <Text style={styles.modalText}>Orden alfabético descendente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => sortPatients("idAsc")}>
                            <Text style={styles.modalText}>Expediente ascendente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => sortPatients("idDesc")}>
                            <Text style={styles.modalText}>Expediente descendiente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => sortPatients("ageAsc")}>
                            <Text style={styles.modalText}>Edad ascendente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => sortPatients("ageDesc")}>
                            <Text style={styles.modalText}>Edad descendiente</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalButton} onPress={() => sortPatients("priority")}>
                            <Text style={styles.modalText}>Por prioridad</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Header onBack={() => navigation.goBack()} onSetting={() => navigation.navigate('EditProfile')} />
            <View style={styles.userContainer}>
                <Image source={{ uri: user.profileImage }} style={styles.userImage} />
                <Text style={styles.userFullName}>{user.name} {user.firstName} {user.lastName}</Text>
                <View style={styles.userIDContainer}>
                    <Text style={styles.userID}>User ID: {user.id}</Text>
                </View>
            </View>
            <View style={styles.patientsContainer}>
                <View style={styles.patientsNavbar}>
                    <Text style={styles.navbarTitle}>Pacientes Encargados</Text>
                    <TouchableOpacity style={styles.filterButton} onPress={() => setModalVisible(true)}>
                        <Feather name="filter" size={24} color="black" style={styles.filterIcon} />
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={styles.patientCardsContainer}>
                    {patients.map((patient, index) => {
                        return (
                            <PatientCard
                                key={index}
                                LastRevision={patient.lastRevision}
                                Name={patient.name}
                                FirstName={patient.firstName}
                                LastName={patient.lastName}
                                BornDate={patient.bornDate}
                                ID={patient.id}
                                Observations={patient.observations}
                            />
                        );
                    })}
                </ScrollView>
            </View>
            <NavBar navigation={navigation} style={styles.navBar} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    userContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    userFullName: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    userIDContainer: {
        marginTop: 5,
    },
    userID: {
        fontSize: 16,
        color: 'gray',
    },
    patientsContainer: {
        flex: 1,
        marginTop: 20,
        width: '90%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    patientCardsContainer: {
        alignItems: 'center',
        paddingBottom: 90,
    },
    patientsNavbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    navbarTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    filterButton: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
    },
    filterIcon: {
        backgroundColor: 'white',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    navBar: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalButton: {
        marginBottom: 10,
    },
});

export default Patient;
