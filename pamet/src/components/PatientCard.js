import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;


function getGenderInfo(Gender) {
    let prefix = '';
    let genderText = '';

    if (Gender.toLowerCase() === 'm') {
        prefix = 'Sr.';
        genderText = 'Masculino';
    } else if (Gender.toLowerCase() === 'f') {
        prefix = 'Sra.';
        genderText = 'Femenino';
    }

    return { prefix, genderText };
}

function getUrgencyLevel(LastRevision) {
    if (LastRevision.includes('minuto')) {
        return '#9EFF3C';
    } else if (LastRevision.includes('hora')) {
        return '#FFD43C';
    } else if (LastRevision.includes('dia')) {
        return '#FFFF00';
    } else {
        return '#008000';
    }
}

export default function PatientCard({ LastRevision, Gender, Name, FirstName, LastName, BornDate, ID, Observations, onPress = () => { } }) {
    const { prefix, genderText } = getGenderInfo(Gender);
    const styles = StyleSheet.create({
        container: {
            width: windowWidth * 0.8,
            backgroundColor: '#fff',
            borderRadius: 5,
        },
        card: {
            width: '100%',
            padding: 10,
            borderRadius:5,
            borderRightColor: getUrgencyLevel(LastRevision),
            borderRightWidth: 5,
            
        },
        LastRevisionContainer: {
            flexDirection: 'row',
            alignItems: 'baseline',
        },
        textContainer: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
        },
        lineContainer: {
            flex: 1,
        },
        lineStyle:{
            borderBottomColor: '#D5D5D5',
            borderBottomWidth: 1,
            alignSelf:'stretch',
            width: '80%',
            marginLeft: 35,
        },
        LastRevisionText: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#C5C5C5',
        },
        LastRevisionText2: {
            fontSize: 16,
            color: '#C5C5C5',
        },
        GeneralInfoTextContainer: {
            flex: 3,
        },
        userIconContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        TextContainer: {
            flex: 1,
        },
        GeneralInfoContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        boldText: {
            fontWeight: 'bold',
        },
        NameText: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        BornDateText: {
            fontSize: 16,
        },
        GenderText: {
            fontSize: 16,
        },
        IDText: {
            fontSize: 16,
        },
        ObservationsText: {
            marginTop: 10,
            fontSize: 14,
            textAlign: 'justify',
        },
        userIcon: {
            width: 50,
            height: 50,
        },
        NormalText: {
            fontSize: 16,
        },
    });
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={[styles.card, { borderRightColor: getUrgencyLevel(LastRevision) }]} onPress={onPress}>
                <View style={styles.LastRevisionContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.LastRevisionText}>Última revisión:</Text>
                        <Text style={styles.LastRevisionText2}> hace {LastRevision}</Text>
                    </View>
                    <View style={styles.lineContainer}>
                        <View style={styles.lineStyle} />
                    </View>
                </View>
                <View style={styles.GeneralInfoContainer}>
                    <View style={styles.GeneralInfoTextContainer}>
                        <Text style={styles.NameText}>{prefix} {FirstName} {LastName}, {Name}</Text>
                        <Text style={styles.NormalText}><Text style={styles.boldText}>Fecha de nacimiento:</Text> {BornDate}</Text>
                        <Text style={styles.NormalText}><Text style={styles.boldText}>Género:</Text> {genderText}</Text>
                        <Text style={styles.NormalText}><Text style={styles.boldText}>Expediente:</Text> {ID}</Text>
                    </View>
                    <View style={styles.userIconContainer}>
                        <Image style={styles.userIcon} source={require('../assets/img/user.png')} />
                    </View>
                </View>
                <View>
                    <Text style={styles.ObservationsText}><Text style={styles.boldText}>Observaciones:</Text> {Observations}</Text>
                </View>
            
            </TouchableOpacity>
        </View>
    );
}