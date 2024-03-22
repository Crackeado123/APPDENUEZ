import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Acercade = () => {
  const nav = useNavigation();
  const animatedViewRef = useRef(null);

  useEffect(() => {
    startAnimation();

    const intervalId = setInterval(() => {
      startAnimation();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const startAnimation = () => {
    if (animatedViewRef.current) {
      animatedViewRef.current.bounce(800);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.centeredContent}>
        <Text style={styles.description}>Tropical World para Android!</Text>

          <Animatable.Image
            ref={animatedViewRef}
            source={require('./img/LogoTW.jpeg')}
            style={styles.logo}
          />
          <Text style={styles.description}>10.310.4</Text>
          <Text style={styles.description}>
            El presente canal de instrucción o ambiente, es operado por Tropical.com de 
            Mexico, S de R.L dE C.V identificada bajo la marca comercial "Tropical" Copyrigth 
            1999-2024 Tropical inc or its affiliates
          </Text>
          <Text style={styles.description}>
            Insurgentes Sur 1602 Piso 9 Suite 900, Credito Constructor Benito Juarez, 03940 Ciudad de Mexico, CDMX, Mexico
          </Text>
          <Text style={styles.description}>---Dar Estilos</Text>
          <Text style={styles.description}>Como cuidamos tu privacidad</Text>
          <Text style={styles.description}>Terminos y condiciones</Text>
          <Text style={styles.description}>Accesibilidad</Text>
          <TouchableOpacity style={styles.ctaButton} onPress={() => console.log('Ir a nada')}>
            <Text style={styles.ctaText}>Calificar en Play Store</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ctaButton} onPress={() => console.log('Ir a sugerencias')}>
            <Text style={styles.ctaText}>Sugerencias</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  centeredContent: {
    alignItems: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    borderRadius: 75,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  ctaButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  ctaText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Acercade;
