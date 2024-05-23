import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Asegúrate de tener instalado @expo/vector-icons

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Buscar" 
        placeholderTextColor="#000"
      />
       <Ionicons name="search-outline" size={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingLeft: 15, 
    paddingRight: 20,
  },
  input: {
    flex: 1, 
    paddingLeft: 10,
  },
});