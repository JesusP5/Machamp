import React, {useState}from "react";
import {Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView, Map} from 'react-native';
import MedicCard from "./medicCard";
import SearchBar from "./SearchBar";
export default function AddMedicsModal({visible, onClose, medics}) {
    const [selectedMedics, setSelectedMedics] = useState([]);
    const handleSelectMedics = (medic) => {
        setSelectedMedics(prevState => {
            if (prevState.includes(medic)) {
                return prevState.filter(m => m !== medic);
            } else {
                return [...prevState, medic];
            }
        });
    };
    const handleAddMedics = () => {
        console.log(selectedMedics.length + ' medicos agregados');
        onClose(selectedMedics);
        setSelectedMedics([]);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Agregar Medicos</Text>
                        <TouchableOpacity style={styles.closeModalButton} onPress={onClose}>
                            <Text style={styles.closeButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.searchBarContainer}>
                        <SearchBar/>
                    </View>
                    <ScrollView style={styles.doctorsContainer}>
                        {medics.map((doctor, index) => (
                            <MedicCard
                                key={index}
                                name={doctor.name}
                                area={doctor.Department}
                                mainArea={doctor.Specialization}
                                photo={doctor.ProfilePicture}
                                onSelect={() => handleSelectMedics(doctor)}
                                isSelected={selectedMedics.includes(doctor)}
                                showCheckbox={true}
                            />
                        ))}
                        <TouchableOpacity style={styles.addDoctorButton} onPress={handleAddMedics}>
                            <Text style={styles.buttonText}>Agregar</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    searchBarContainer: {
        marginBottom: 20
    },
    doctorsContainer: {
        maxHeight: 400
    },
    addDoctorButton: {
        backgroundColor: '#008EDA',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    closeModalButton: {
        padding: 10
    }
});