import React, { useState } from 'react';
import { styles0 } from './Estilos';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export const Login = () => {
  const nav = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (!email.trim() && !password.trim()) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }

    if (!email.trim() && password.trim()) {
      Alert.alert('Error', 'Por favor, ingresa tu correo electrónico');
      return;
    }

    if (email.trim() && !password.trim()) {
      Alert.alert('Error', 'Por favor, ingresa tu contraseña');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Error', 'Por favor, ingresa un correo electrónico válido');
      return;
    }

    try {
      const data = {
        correo: email,
        password: password,
      };

      const response = await fetch('https://servidortropicalworld-1.onrender.com/usuarios/singIn/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        nav.navigate('Home');
      } else {
        Alert.alert('Error', result.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Correo o contraseña incorrectas');
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <ImageBackground
      source={require('./img/UnFondo.jpg')}
      style={styles0.backgroundImage}
    >
      <View style={styles0.container}>
        <View style={styles0.container2}>

          <Text style={styles0.title}>Iniciar sesión</Text>
          <Animatable.Image
            source={require('./img/LogoTW.jpeg')}
            style={styles0.logo}
          />
          <Text style={styles0.label}>Correo electrónico</Text>
          <TextInput
            style={styles0.inputContainer}
            placeholder='Ingresa tu correo electrónico'
            autoCompleteType='email'
            keyboardType='email-address'
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <Text style={styles0.label}>Contraseña</Text>
          <TextInput
            style={styles0.inputContainer}
            placeholder='Ingresa tu contraseña'
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity onPress={toggleShowPassword} style={styles0.eyeIcon}>
            <Animatable.View animation="bounceIn">
              <FontAwesome name={showPassword ? 'eye-slash' : 'eye'} size={24} color='black' />
            </Animatable.View>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogin} style={styles0.Button2}>
            <Text style={styles0.textoBoton2}>Iniciar sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles0.link}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text onPress={() => nav.navigate('Registro')} style={styles0.link}>Registrarse</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text onPress={() => nav.navigate('Home')} style={styles0.link}>Ingresar como invitado</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    </ImageBackground>
  );
};
