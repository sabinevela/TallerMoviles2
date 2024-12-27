import { StyleSheet, Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import React from 'react';

export default function WelcomeScreen({ navigation }: { navigation: any }) {
  return (
    <ImageBackground
      source={require('appliacion_pruebasv/assets/imagenes/df87b9fbebb9bbe47c8b6b9865bfee6c.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Drawer")} style={styles.buttonContainer}>
          <Image
            source={require('appliacion_pruebasv/assets/imagenes/boton-inicio.jpg')}
            style={styles.image}
          />
          <Text style={styles.buttonText}>Ingresa -- 🐾</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: '#e3deca',
    padding: 20,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
});
