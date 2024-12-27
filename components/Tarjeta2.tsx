import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';

export default function Tarjeta2(props: any) {
  console.log(props.informacion.title);

  function detalles(title: string) {
    Alert.alert('Advertencia', 'La canción se llama ' + title);
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => detalles(props.informacion.title)}
    >
      <Text style={styles.title}>{props.informacion.title}</Text>
      <View style={styles.fila}>
        <Image
          source={{ uri: props.informacion.media.cover_image }}
          style={styles.img}
        />
        <Text>{props.informacion.media.url}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    borderRadius: 20,
    padding: 10,
  },
  img: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
});
