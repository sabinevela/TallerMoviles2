import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Calculadora() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState<number | string>(0);

  function aumentar() {
    setNumero1(numero1 + 1);
  }

  function disminuir() {
    setNumero2(numero2 - 1);
  }

  function sumar() {
    setResultado(numero1 + numero2);
  }

  function restar() {
    setResultado(numero1 - numero2);
  }

  function multiplicar() {
    setResultado(numero1 * numero2);
  }

  function dividir() {
    if (numero2 !== 0) {
      setResultado(numero1 / numero2);
    } else {
      setResultado('Error: División por 0');
    }
  }

  function residuo() {
    if (numero2 !== 0) {
      setResultado(numero1 % numero2);
    } else {
      setResultado('Error: División por 0');
    }
  }

  return (
    <ImageBackground
      source={{ uri:' appliacion_pruebasv/assets/imagenes/calculadora-fondo.jpg'}}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.controlContainer}>
          <Button title="<=" onPress={() => setNumero1(numero1 - 1)} />
          <Text style={styles.numberText}>{numero1}</Text>
          <Button title="=>" onPress={aumentar} />

          <Button title="<=" onPress={() => setNumero2(numero2 - 1)} />
          <Text style={styles.numberText}>{numero2}</Text>
          <Button title="=>" onPress={disminuir} />
        </View>

        <View style={styles.operationsContainer}>
          <Button title="Sumar" onPress={sumar} />
          <Button title="Restar" onPress={restar} />
          <Button title="Multiplicar" onPress={multiplicar} />
          <Button title="Dividir" onPress={dividir} />
          <Button title="Residuo" onPress={residuo} />
        </View>

        {resultado !== null && (
          <Text style={styles.resultText}>Resultado: {resultado}</Text>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  operationsContainer: {
    marginVertical: 20,
  },
  numberText: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  resultText: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

