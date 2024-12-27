import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function Pagina2Screen() {
  const usuarios = [
    {
      nombre: 'Sabine Vela',
      edad: 19,
    },
    {
      nombre: 'Luke Hemmings',
      edad: 27,
    },
    {
      nombre: 'Michael Clifford',
      edad: 28,
    },
  ];
  return (
    <View>
      <Text style={styles.title}>USUARIOS</Text>
      <FlatList
        data={usuarios}
        renderItem={({ item }) => <Text>{item.nombre}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: 'center',
  },
});
