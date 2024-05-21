import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

function getUrgencyLevel(LastRevision) {
  if (LastRevision.includes("minuto")) {
    return "#9EFF3C";
  } else if (LastRevision.includes("hora")) {
    return "#FFFF00";
  } else if (LastRevision.includes("día")) {
    return "#FFD43C";
  } else if (LastRevision.includes("semana")) {
    return "#FFA500";
  } else {
    return "#008000";
  }
}

export default function PatientCard({
  LastRevision,
  Name,
  FirstName,
  LastName,
  BornDate,
  ID,
  Observations,
  onPress = () => {},
}) {
  const styles = StyleSheet.create({
    container: {
      width: windowWidth * 0.8,
      backgroundColor: "#fff",
      borderRadius: 5,
      marginVertical: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderColor: "#F0F0F0",
      borderWidth: 1,
    },
    card: {
      width: "100%",
      padding: 10,
      borderRadius: 5,
      borderRightColor: getUrgencyLevel(LastRevision),
      borderRightWidth: 5,
    },
    LastRevisionContainer: {
      flexDirection: "row",
      alignItems: "baseline",
    },
    textContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    LastRevisionText: {
      fontSize: 16,
      fontWeight: "bold",
      color: "#C5C5C5",
    },
    LastRevisionText2: {
      fontSize: 16,
      color: "#C5C5C5",
    },
    GeneralInfoTextContainer: {
      flex: 3,
    },
    userIconContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    TextContainer: {
      flex: 1,
    },
    GeneralInfoContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    boldText: {
      fontWeight: "bold",
    },
    NameText: {
      fontSize: 20,
      fontWeight: "bold",
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
      textAlign: "justify",
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
      <TouchableOpacity
        style={[
          styles.card,
          { borderRightColor: getUrgencyLevel(LastRevision) },
        ]}
        onPress={onPress}
      >
        <View style={styles.LastRevisionContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.LastRevisionText}>Última revisión:</Text>
            <Text style={styles.LastRevisionText2}> hace {LastRevision}</Text>
          </View>
        </View>
        <View style={styles.GeneralInfoContainer}>
          <View style={styles.GeneralInfoTextContainer}>
            <Text style={styles.NameText}>
              {FirstName} {LastName}, {Name}
            </Text>
            <Text style={styles.NormalText}>
              <Text style={styles.boldText}>Fecha de nacimiento:</Text>{" "}
              {BornDate}
            </Text>
            <Text style={styles.NormalText}>
              <Text style={styles.boldText}>Expediente:</Text> {ID}
            </Text>
          </View>
          <View style={styles.userIconContainer}>
            <Image
              style={styles.userIcon}
              source={require("../assets/img/user.png")}
            />
          </View>
        </View>
        <View>
          <Text style={styles.ObservationsText}>
            <Text style={styles.boldText}>Observaciones:</Text> {Observations}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
