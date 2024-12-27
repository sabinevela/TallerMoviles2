import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import datos from '../assets/data/musica.json';
import Tarjeta2 from '../components/Tarjeta2';

export default function Pagina4Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Canciones</Text>
      <FlatList
        data={datos.musica}
        renderItem={({ item }) => (
          <Tarjeta2 informacion={item}/>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffedb9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#facc46',
    paddingBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius:10
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
