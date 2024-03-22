import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView, Alert } from 'react-native';
import { contactostyles } from './Estilos';

const Dispositivos = () => {
  const [ledEncendido, setLedEncendido] = useState(false);
  const [valancinEncendido, setValancinEncendido] = useState(false);
  const ledUrl = 'https://servidortropicalworld-1.onrender.com/dispositivos/cambiarEstadoLed/';
  const valancinUrl = 'https://servidortropicalworld-1.onrender.com/dispositivos/cambiarEstadoValancin/';

  const toggleLed = async () => {
    try {
      const response = await fetch(ledUrl, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ led: !ledEncendido ? 1 : 0 }) // Invierte el estado del LED
      });
      if (response.ok) {
        setLedEncendido(!ledEncendido); 
      } else {
        throw new Error('Error al cambiar el estado del LED');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo cambiar el estado del LED');
    }
  };

  const toggleValancin = async () => {
    try {
      const response = await fetch(valancinUrl, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ valancin: !valancinEncendido ? 1 : 0 }) // Invierte el estado del valancín
      });
      if (response.ok) {
        setValancinEncendido(!valancinEncendido); 
      } else {
        throw new Error('Error al cambiar el estado del valancín');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo cambiar el estado del valancín');
    }
  };

  return (
    <ImageBackground
      source={require('./img/UnFondo.jpg')}
      style={contactostyles.backgroundImage}
    >
      <ScrollView>
        <View style={contactostyles.container}>
          <TouchableOpacity
            style={contactostyles.button}
            onPress={toggleLed}
          >
            <Text style={contactostyles.buttonText}>
              {ledEncendido ? 'Apagar LED' : 'Encender LED'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={contactostyles.button}
            onPress={toggleValancin}
          >
            <Text style={contactostyles.buttonText}>
              {valancinEncendido ? 'Apagar valancín' : 'Encender valancín'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Dispositivos;
