import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Button, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { styles0 } from './Estilos';

const Bienvenida = () => {
  const nav = useNavigation();
  const animatedViewRef = useRef(null);

  useEffect(() => {
    startAnimation();

    const intervalId = setInterval(() => {
      startAnimation();
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const startAnimation = () => {
    if (animatedViewRef.current) {
      animatedViewRef.current.bounce(3800);
    }
  };

  return (
    <ImageBackground source={require('./img/UnFondo.jpg')} style={styles0.container}>
      <View style={styles0.centeredContent}>
        <Animatable.Text animation="zoomIn" duration={1000} style={styles0.titulo}>TROPICAL WORLD</Animatable.Text>
        <Animatable.Image
          source={require('./img/nn.png')}
          style={styles0.logo2}
          ref={animatedViewRef}
          resizeMode="contain"
        />
        <Text style={styles0.description}>¡Bienvenido!</Text>
        <Text style={styles0.description}>Explora y descubre artículos para bebé emocionantes al mejor precio</Text>
        <TouchableOpacity onPress={() => nav.navigate('Login')} style={styles0.Button}>
          <Text style={styles0.textoBoton}>Empezar Ahora</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Bienvenida;
