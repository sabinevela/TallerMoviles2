import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Calculadora() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);

  useEffect(()=> {

  })

  function aumentar() {
    setNumero1(numero1 + 1); 
  }
function disminuir(){
    setNumero2(numero2-1)
}
// suma, resta, multiplicacion, division y residuos.
  return (
    <View style={styles.container}>
      <View style={styles.controlContainer}>
        <Button title="<=" onPress={() => setNumero1(numero1 - 1)} />
        <Text style={styles.numberText}>{numero1}</Text>
        <Button title="=>" onPress={() => aumentar()} />
        <Button title="<=" onPress={() => setNumero2(numero2 + 1)} />
        <Text style={styles.numberText}>{numero2}</Text>
        <Button title="=>" onPress={() => disminuir()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 20,
    marginHorizontal: 10,
  },

});
