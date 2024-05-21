import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

export default function PatientCard({
  username,
  expediente,
  edad,
  genero,
  telefono,
  fechaAlta,
  curp,
}) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <View style={[styles.container, expanded && styles.expandedContainer]}>
      <TouchableWithoutFeedback onPress={toggleExpanded}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Datos del Paciente</Text>
          <Image
            source={
              expanded
                ? require("../assets/up.png")
                : require("../assets/down.png")
            }
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      {expanded && (
        <View style={styles.dataContainer}>
          <Text>
            <Text style={styles.label}>Expediente:</Text>{" "}
            <Text style={styles.value}>{expediente}</Text>
          </Text>
          <Text>
            <Text style={styles.label}>Edad:</Text>{" "}
            <Text style={styles.value}>{edad}</Text>
          </Text>
          <Text>
            <Text style={styles.label}>Género:</Text>{" "}
            <Text style={styles.value}>{genero}</Text>
          </Text>
          <Text>
            <Text style={styles.label}>Teléfono:</Text>{" "}
            <Text style={styles.value}>{telefono}</Text>
          </Text>
          <Text>
            <Text style={styles.label}>Fecha de Alta:</Text>{" "}
            <Text style={styles.value}>{fechaAlta}</Text>
          </Text>
          <Text>
            <Text style={styles.label}>CURP:</Text>{" "}
            <Text style={styles.value}>{curp}</Text>
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginBottom: 10,
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  expandedContainer: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  titleContainer: {
    backgroundColor: "#36BCFA",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    marginLeft: 5,
  },
  dataContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
