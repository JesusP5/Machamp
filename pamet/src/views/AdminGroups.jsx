import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../assets/Colors";
import Header from "../components/header";
import Navbar from "../components/navbar";
import groups from "../models/groups";

export default function AdminGroups({ navigation, route }) {
  const user = route.params;
  console.log(user.typeOfUser);
  console.log(user);
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
            {groups.map((group) => (
          <View style={styles.groupContain}>
            
             
                  <View style={styles.leftButton}>
                  <Text style={{fontSize:18}}>{group.name}</Text> 
                  <Text style={{fontSize:14}}>Integrantes:{group.doctorInGroup.length}</Text>                   
                  </View>
                  <TouchableOpacity style={styles.rightButton} onPress={()=>{navigation.navigate("Group",{user:user,group:group})}}>
                    <Text style={{fontSize:18,color:"white"}}>Ver</Text>
                  </TouchableOpacity>
                  
           
          </View>
           ))}
        </View>
      </View>
      <Navbar navigation={navigation} styles={styles.navBar} userData={user} />
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
