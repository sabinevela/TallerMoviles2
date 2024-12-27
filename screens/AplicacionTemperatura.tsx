import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ImageBackground } from 'react-native';

const AplicacionTemperatura = () => {
  const [kelvin, setKelvin] = useState<number>(0);
  const [celsius, setCelsius] = useState<number | null>(null);
  const [fahrenheit, setFahrenheit] = useState<number | null>(null);
  const [mensaje, setMensaje] = useState<string>("");

  const handleKelvinValor = (value: string) => {
    const kelvinValue = parseFloat(value);
    if (!isNaN(kelvinValue)) {
      setKelvin(kelvinValue);
    }
  };

  const convertirTemperatura = () => {
    if (kelvin < 0) {
      alert("Ingrese un caracter valido");
      return;
    }

    const celsiusTemp = kelvin - 273.15;
    const fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;

    setCelsius(celsiusTemp);
    setFahrenheit(fahrenheitTemp);

    if (celsiusTemp > 100) {
      setMensaje("¡Se ha superado la temperatura! ⚠️");
    } else {
      setMensaje("");
    }
  };

  return (
    <ImageBackground
      source={require('appliacion_pruebasv/assets/imagenes/fondo-temperatura.jpg')}
      style={styles.background}
    >
      <View style={styles.app}>
        <View style={styles.container}>
          <Text style={styles.title}>App de Temperatura</Text>
          <Image
            source={require('appliacion_pruebasv/assets/imagenes/fondo-temperatura.jpg')}
            style={styles.logo}
          />

          <TextInput
            style={styles.input}
            placeholder="Ingresa temperatura en Kelvin"
            keyboardType="numeric"
            value={kelvin.toString()}
            onChangeText={handleKelvinValor}
          />

          <Button title="Convertir" onPress={convertirTemperatura} color="#778b58" />

          <View style={styles.resultados}>
            {celsius !== null && fahrenheit !== null && (
              <>
                <Text style={styles.resultadoText}>Celsius: {celsius.toFixed(2)} °C</Text>
                <Text style={styles.resultadoText}>Fahrenheit: {fahrenheit.toFixed(2)} °F</Text>
              </>
            )}

            {mensaje && <Text style={styles.advertencia}>{mensaje}</Text>}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  app: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 30,
    borderRadius: 8,
    width: 300,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    padding: 10,
    marginVertical: 15,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
  },
  resultados: {
    marginTop: 20,
  },
  resultadoText: {
    fontSize: 18,
    marginBottom: 5,
  },
  advertencia: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default AplicacionTemperatura;


