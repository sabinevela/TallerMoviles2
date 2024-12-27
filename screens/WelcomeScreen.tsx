import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';

export default function WelcomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Drawer")}>
        <Image
          source={require('.../assets/imagenes/boton-de-inicio.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Text style={styles.text}>INGRESAR</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c2fbb9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100, 
    height: 100, 
    marginBottom: 10,
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#000', 
  },
});
