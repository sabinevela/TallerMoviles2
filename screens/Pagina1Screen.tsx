import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Pagina1Screen() {
  const navigation = useNavigation();
  
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [ciudad, setCiudad] = useState('');

  const manejarEnvio = () => {
    if (!nombre || !edad || !ciudad) {
      Alert.alert('Error', 'Llena todos los campos');
    } else {
      const esMayor = parseInt(edad, 10) >= 18 ? 'mayor de edad' : 'menor de edad';
      Alert.alert(
        'Datos enviados',
        `Su nombre es ${nombre}, tiene ${edad} años, es ${esMayor} y vive en ${ciudad}.`
      );
      setNombre('');
      setEdad('');
      setCiudad('');
    }
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://www.j-14.com/wp-content/uploads/2024/03/GettyImages-1342578743.jpg?fit=800%2C533&quality=86&strip=all',
      }}
      style={styles.background}
    >
      <View style={styles.formularioContenedor}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu nombre"
          placeholderTextColor="white"
          value={nombre}
          onChangeText={setNombre}
        />
        <Text style={styles.label}>Edad:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu edad"
          placeholderTextColor="white"
          keyboardType="numeric"
          value={edad}
          onChangeText={setEdad}
        />
        <Text style={styles.label}>Ciudad:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu ciudad"
          placeholderTextColor="white"
          value={ciudad}
          onChangeText={setCiudad}
        />
        <Button title="Enviar" onPress={manejarEnvio} color="skyblue" />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formularioContenedor: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  label: {
    color: 'skyblue',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: 'white',
  },
});
