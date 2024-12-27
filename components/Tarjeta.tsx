import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

export default function Tarjeta(props: any) {
  console.log(props.informacion.name);

  function detalles(nombre: string) {
    Alert.alert('Advertencia', 'El personaje se llama ' + nombre);
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => detalles(props.informacion.name)}
    >
      <Text>{props.informacion.name}</Text>
      <View style={styles.fila}>
        <Image
          source={{ uri: props.informacion.image }}
          style={styles.img}
        />
        <Text>{props.informacion.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c0e697',
    margin: 10,
    borderRadius: 20,
  },
  img: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
  fila: {
    flexDirection: 'row',
  },
});
