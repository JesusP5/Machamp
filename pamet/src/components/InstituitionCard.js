import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Card({HospitalName, HospitalId, HospitalAddress, HospitalPhone, Doctor, GroupSize, HospitalPicture, onPress}) {
    return (

        <View style={styles.container}>
            <TouchableOpacity style={styles.card} onPress={onPress}>
                <View style={styles.leftColumn}>
                    <Text style={styles.hospitalName}>{HospitalName}</Text>
                        <Text style={styles.textcontainer}>
                            <Text style={styles.boldText}>Dirección: </Text>
                            <Text style={styles.normalText}>{HospitalAddress}</Text>
                        </Text>
                        <Text style={styles.textcontainer}>
                            <Text style={styles.boldText}>Teléfono: </Text>
                            <Text style={styles.normalText}>{HospitalPhone}</Text>
                        </Text>
                    <View style={styles.GroupData}>
                        <View>
                            <Text style={styles.doctorTitle}>Medico Encargado:</Text>
                            <Text style={styles.doctorName}>{Doctor}</Text>
                        </View>
                        <View style={styles.groupcontainer}>
                            <Text style={styles.groupSize}>{GroupSize}</Text>
                            <Image style={styles.groupIcon} source={require('../assets/img/user-group.png')} />
                        </View>
                    </View>
                </View>
                <View style={styles.rightColumn}>
                    <Text style={styles.hospitalId}>ID: {HospitalId}</Text>
                    <Image style={styles.hospitalImage} source={HospitalPicture} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

//ejemplo de uso: 
/* <Card
HospitalName="Centro médico COSCAMI"
HospitalId="3D6J09"
HospitalAddress="Av Río Moctezuma 176, San Cayetano, 76807 San Juan del Río, Qro."
HospitalPhone="427 274 1481"
Doctor="Dr. Alonso Gutierrez Jimenez"
GroupSize="192"
HospitalPicture={require('../assets/img/HospitalPicture.png')}
onPress={() => Alert.alert('Hospital pressed')}
/> */

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        padding: 10,
        margin: 10,
        marginHorizontal: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    leftColumn: {
        width: '70%',
    },
    rightColumn: {
        marginLeft: 10,
        width: '30%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    hospitalName: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10,
    },
    HospitalAddress: {
        fontSize: 16,
    },
    HospitalPhone: {
        fontSize: 16,
    },
    GroupData: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    doctorTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    doctorName: {
        fontSize: 16,
    },
    groupSize: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5,
        textAlign: 'center',
    },
    groupIcon: {
        width: 30,
        height: 30,
    },
    hospitalId: {
        fontSize: 16,
        color: '#A0A0A0',
    },
    hospitalImage: {
        width: 90,
        height: 90,
        borderRadius: 10,
    },
    textcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    boldText: {
        fontWeight: 'bold',
    },
    normalText: {
        fontSize: 16,
    },
    groupcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    
});