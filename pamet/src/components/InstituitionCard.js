import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card({HospitalName, HospitalId, HospitalAddress, HospitalPhone, Doctor, GroupSize, HospitalPicture }) {
    return (
        <View style={styles.card}>
            <View style={styles.leftColumn}>
                <Text style={styles.hospitalName}>{HospitalName}</Text>
                <Text style={styles.HospitalAddress}>Dirección: {HospitalAddress}</Text>
                <Text style={styles.HospitalPhone}>Teléfono: {HospitalPhone}</Text>
                <View style={styles.GroupData}>
                    <View>
                        <Text style={styles.doctorTitle}>Medico Encargado:</Text>
                        <Text style={styles.doctorName}>{Doctor}</Text>
                    </View>
                    <View>
                        <Text style={styles.groupSize}>{GroupSize}</Text>
                        <Image style={styles.groupIcon} source={'../assets/img/user-group.png'} />
                    </View>
                </View>
            </View>
            <View style={styles.rightColumn}>
                <Text style={styles.hospitalId}>ID: {HospitalId}</Text>
                <Image style={styles.hospitalImage} source={HospitalPicture} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        padding: 10,
        marginTop: 40,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    leftColumn: {
        width: '70%',
    },
    rightColumn: {
        width: '30%',
        alignItems: 'center',
    },
    hospitalName: {
        fontWeight: 'bold',
        fontSize: 18,
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
    },
    groupIcon: {
        width: 30,
        height: 30,
    },
    hospitalId: {
        fontSize: 16,
    },
    hospitalImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
});